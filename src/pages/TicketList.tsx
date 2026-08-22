import { Table, Button, Tag, Select, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { dataSource } from '../data/tickets';
import { useTranslation } from 'react-i18next';
import { useMemo, useState } from 'react';

function TicketList() {
  const { t } = useTranslation('tickets');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const filteredData = useMemo(() => {
    if (statusFilter === 'All') return dataSource;
    return dataSource.filter((ticket) => ticket.status === statusFilter);
  }, [statusFilter]);

  const filterOptions = [
    { value: 'All', label: t('all') },
    { value: 'Open', label: t('open') },
    { value: 'In Progress', label: t('inProgress') },
    { value: 'Closed', label: t('closed') },
  ];

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
    { title: t('status'), dataIndex: 'status', key: 'status', render: (status: string) => <Tag>{status === 'Open' ? t('open') : status === 'In Progress' ? t('inProgress') : t('closed')}</Tag> },
    { title: t('priority'), dataIndex: 'priority', key: 'priority', render: (priority: string) => <Tag color={priority === 'High' ? 'red' : priority === 'Medium' ? 'orange' : 'green'}>{priority === 'High' ? t('high') : priority === 'Medium' ? t('medium') : t('low')}</Tag> },
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
  );
}

export default TicketList;