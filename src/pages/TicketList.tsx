import { Table, Button, Tag } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { dataSource } from '../data/tickets';

function TicketList() {
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text: string, record: { id: string }) => (
        <Link to={`/tickets/${record.id}`}>{text}</Link>
      ),
    },
    { title: 'Status', dataIndex: 'status', key: 'status', render: (status: string) => <Tag>{status}</Tag> },
    { title: 'Priority', dataIndex: 'priority', key: 'priority', render: (priority: string) => <Tag color={priority === 'High' ? 'red' : priority === 'Medium' ? 'orange' : 'green'}>{priority}</Tag> },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: unknown, record: { id: string }) => (
        <Button>
          <Link to={`/tickets/${record.id}/edit`}>Edit</Link>
        </Button>
      ),
    },
  ];

  return (
    <div className='p-24'>
      <div className='flex justify-between items-center'>
        <h2 className='font-black text-3xl text-center flex-1'>Tickets</h2>
        <Link to="/tickets/new">
          <Button type="primary" icon={<PlusOutlined />}>Create Ticket</Button>
        </Link>
      </div>
      <Table rowKey="id" dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default TicketList;