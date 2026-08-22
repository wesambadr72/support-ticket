import { dataSource } from '../data/tickets';
import { Descriptions, Card, Button, Statistic, Select, message } from 'antd';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function TicketView() {
  const { id } = useParams();
  const ticket = dataSource.find((t) => t.id === id);
  const { t } = useTranslation('tickets');
  const [currentStatus, setCurrentStatus] = useState<string>(ticket?.status);

  const statusOptions = [
    { value: 'Open', label: t('open') },
    { value: 'In Progress', label: t('inProgress') },
    { value: 'Closed', label: t('closed') },
  ];

  const handleStatusChange = (value: string) => {
    setCurrentStatus(value);
    if (ticket) {
      ticket.status = value;
      message.success(t('success'))
    }
  };

  return (
    <div className='p-6 max-w-2xl mx-auto'>
      <Card
        title={t('TicketDetail')}
        extra={
          <Link to={`/tickets/${id}/edit`}>
            <Button type="primary">{t('edit')}</Button>
          </Link>
        }
        style={{ marginBottom: 16 }}
      >
        <Statistic title={t('ticketId')} value={id} />
        <Descriptions bordered column={1} style={{ marginTop: 19 }}>
          <Descriptions.Item label={t('ticketTitle')}>{ticket?.title}</Descriptions.Item>
          <Descriptions.Item label={t('status')}>
            <Select
              value={currentStatus}
              onChange={handleStatusChange}
              options={statusOptions}
              style={{ width: 200 }}
            />
          </Descriptions.Item>
          <Descriptions.Item label={t('priority')}>{ticket?.priority}</Descriptions.Item>
        </Descriptions>
          <Button type="primary" color='orange' variant="outlined" style={{marginTop: 16}}>
            <Link to="/tickets" style={{textDecoration: 'none'}}>{t('back')}</Link>
          </Button>
      </Card>
    </div>
  );
}

export default TicketView;