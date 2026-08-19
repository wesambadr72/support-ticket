import { Table, Button, Tag } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { dataSource } from '../data/tickets';
import { useLanguage } from '../LanguageContext';

function TicketList() {
  const { t } = useLanguage();

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    {
      title: t.title,
      dataIndex: 'title',
      key: 'title',
      render: (text: string, record: { id: string }) => (
        <Link to={`/tickets/${record.id}`}>{text}</Link>
      ),
    },
    { title: t.status, dataIndex: 'status', key: 'status', render: (status: string) => <Tag>{status === 'Open' ? t.open : status === 'In Progress' ? t.inProgress : t.closed}</Tag> },
    { title: t.priority, dataIndex: 'priority', key: 'priority', render: (priority: string) => <Tag color={priority === 'High' ? 'red' : priority === 'Medium' ? 'orange' : 'green'}>{priority === 'High' ? t.high : priority === 'Medium' ? t.medium : t.low}</Tag> },
    {
      title: t.action,
      key: 'actions',
      render: (_: unknown, record: { id: string }) => (
        <Button>
          <Link to={`/tickets/${record.id}/edit`}>{t.edit}</Link>
        </Button>
      ),
    },
  ];

  return (
    <div>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='font-black text-3xl'>{t.mainTitle}</h2>
        <Link to="/tickets/new">
          <Button type="primary" icon={<PlusOutlined />}>{t.createTicket}</Button>
        </Link>
      </div>
      <Table rowKey="id" dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default TicketList;