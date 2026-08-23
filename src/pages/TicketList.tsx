import { Table, Button, Tag, Select, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMemo, useState } from 'react';
import PageLayout from '../components/layout/pagelayout';
import { ticketService } from '../services/ticket.service';
import { STATUS_FILTER_VALUES } from '../constants/tickets';
import { priorityColor, priorityLabelKey, statusLabelKey } from '../utils/ticket';
import type { Priority, Status } from '../types/ticket';

function TicketList() {
  const { t } = useTranslation('tickets');
  const [statusFilter, setStatusFilter] = useState<Status | 'All'>('All');

  const filteredData = useMemo(() => {
    const tickets = ticketService.getAll();
    if (statusFilter === 'All') return tickets;
    return tickets.filter((ticket) => ticket.status === statusFilter);
  }, [statusFilter]);

  const filterOptions = STATUS_FILTER_VALUES.map((value) => ({
    value,
    label: value === 'All' ? t('all') : t(statusLabelKey[value]),
  }));

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    {
      title: t('ticketTitle'),
      dataIndex: 'title',
      key: 'title',
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
        <Button>
          <Link to={`/tickets/${record.id}/edit`}>{t('edit')}</Link>
        </Button>
      ),
    },
  ];

  return (
    <PageLayout>
      <div>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-3xl text-center flex-1'>{t('mainTitle')}</h2>
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
        <Table rowKey="id" dataSource={filteredData} columns={columns} />
      </div>
    </PageLayout>
  );
}

export default TicketList;