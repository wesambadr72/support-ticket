import { dataSource } from '../data/tickets';
import { Descriptions, Card, Button, Statistic } from 'antd';
import { useParams, Link } from 'react-router-dom';

function TicketView() {
  const { id } = useParams();
  const ticket = dataSource.find((t) => t.id === id);

  return (
    <div className='p-24 max-w-150 mx-auto'>
      <Card
        title="Ticket Details"
        extra={
          <Link to={`/tickets/${id}/edit`}>
            <Button type="primary">Edit</Button>
          </Link>
        }
        style={{ marginBottom: 16 }}
      >
        <Statistic title="Ticket ID" value={id} />
        <Descriptions bordered column={1} style={{ marginTop: 16 }}>
          <Descriptions.Item label="Title">{ticket?.title ?? 'Not found'}</Descriptions.Item>
          <Descriptions.Item label="Status">{ticket?.status ?? 'Not found'}</Descriptions.Item>
          <Descriptions.Item label="Priority">{ticket?.priority ?? 'Not found'}</Descriptions.Item>
        </Descriptions>
      </Card>
      <Button type="primary" color='orange' variant="outlined">
      <Link to="/tickets">Back</Link>
      </Button>
    </div>
  );
}

export default TicketView;