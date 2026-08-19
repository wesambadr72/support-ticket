import { dataSource } from '../data/tickets';
import { Descriptions, Card, Button, Statistic } from 'antd';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

function TicketView() {
  const { id } = useParams();
  const ticket = dataSource.find((t) => t.id === id);
  const {t} = useLanguage();

  return (
    <div className='p-24 max-w-150 mx-auto'>
      <Card
        title={t.TicketDetail}
        extra={
          <Link to={`/tickets/${id}/edit`}>
            <Button type="primary">{t.edit}</Button>
          </Link>
        }
        style={{ marginBottom: 16 }}
      >
        <Statistic title="Ticket ID" value={id} />
        <Descriptions bordered column={1} style={{ marginTop: 16 }}>
          <Descriptions.Item label={t.title}>{ticket.title}</Descriptions.Item>
          <Descriptions.Item label={t.status}>{ticket.status}</Descriptions.Item>
          <Descriptions.Item label={t.priority}>{ticket.priority}</Descriptions.Item>
        </Descriptions>
      </Card>
      <Button type="primary" color='orange' variant="outlined">
      <Link to="/tickets">{t.back}</Link>
      </Button>
    </div>
  );
}

export default TicketView;