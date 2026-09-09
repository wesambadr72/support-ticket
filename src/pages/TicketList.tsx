import { Table, Button, Tag, Select, Space, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo, useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { AllTickets, DeleteTicket } from '../api/ticket';
import { STATUS_FILTER_VALUES } from '../constants/tickets';
import { priorityColor, priorityLabelKey, statusLabelKey } from '../utils/ticket';
import type { Priority, Status, Ticket } from '../types/ticket';

function TicketList() {
  const { t } = useTranslation('tickets');
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<Status | 'All'>('All');

  useEffect(() => {
    AllTickets()
      .then(setTickets)
      .catch(() => message.error(t('error')))
      .finally(() => setLoading(false));
  }, [t]);

  const filteredData = useMemo(
    () =>
      statusFilter === 'All'
        ? tickets
        : tickets.filter((ticket) => ticket.status === statusFilter),
    [tickets, statusFilter]
  );

  const filterOptions = STATUS_FILTER_VALUES.map((value) => ({
    value,
    label: value === 'All' ? t('all') : t(statusLabelKey[value]),
  }));

  const handleDelete = async (id: string) => {
    try {
      await DeleteTicket(id);
      setTickets((prev) => prev.filter((ticket) => ticket.id !== id));
      message.success(t('deleted'));
    } catch {
      message.error(t('error'));
    }
  };

  const columns = [
    { title: t('name'), dataIndex: 'name', key: 'name' },
    {
      title: t('subject'),
      dataIndex: 'subject',
      key: 'subject',
      render: (text: string, record: { id: string }) => (
        <Link to={`/tickets/${record.id}`}>{text}</Link>
      ),
    },
    {
      title: t('status'),
      dataIndex: 'status',
      key: 'status',
      render: (status: Status) => <Tag>{t(statusLabelKey[status])}</Tag>,
    },
    {
      title: t('priority'),
      dataIndex: 'priority',
      key: 'priority',
      render: (priority: Priority) => (
        <Tag color={priorityColor[priority]}>{t(priorityLabelKey[priority])}</Tag>
      ),
    },
    {
      title: t('action'),
      key: 'actions',
      render: (_: unknown, record: { id: string }) => (
        <>
        <Button>
          <Link to={`/tickets/${record.id}/edit`}>{t('edit')}</Link>
        </Button>
        <Button type="primary" danger onClick={() => handleDelete(record.id)}>
          {t('delete')}
        </Button>
        </>
      ),
    },
  ];

  return (
    <PageLayout>
      <div>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-3xl flex-1'>{t('mainTitle')}</h2>
          <Space>
            <Select
              value={statusFilter}
              onChange={setStatusFilter}
              options={filterOptions}
              style={{ width: 160 }}
            />
            <Link to="/tickets/new">
              <Button type="primary" icon={<PlusOutlined />}>{t('createTicket')}</Button>
            </Link>
          </Space>
        </div>
        <Table rowKey="id" dataSource={filteredData} columns={columns} loading={loading} />
      </div>
    </PageLayout>
  );
}

export default TicketList;