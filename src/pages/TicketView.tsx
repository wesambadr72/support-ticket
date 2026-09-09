import { Descriptions, Card, Button, Statistic, Select, message } from 'antd';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { GetTicketById, UpdateTicket } from '../api/ticket';
import { TICKET_STATUSES } from '../constants/tickets';
import { statusLabelKey } from '../utils/ticket';
import type { Status, Ticket } from '../types/ticket';

function TicketView() {
  const { id } = useParams();
  const { t } = useTranslation('tickets');
  const [ticket, setTicket] = useState<Ticket>();
  const [currentStatus, setCurrentStatus] = useState<Status>();

  useEffect(() => {
    if (!id) return;
    GetTicketById(id)
      .then((data) => {
        setTicket(data);
        setCurrentStatus(data.status);
      })
      .catch(() => message.error(t('error')));
  }, [id, t]);

  const statusOptions = TICKET_STATUSES.map((value) => ({
    value,
    label: t(statusLabelKey[value]),
  }));

  const handleStatusChange = async (value: Status) => {
    if (!ticket) return;
    const previous = currentStatus;
    setCurrentStatus(value);
    try {
      const updated = await UpdateTicket(ticket.id, {
        name: ticket.name,
        email: ticket.email,
        subject: ticket.subject,
        message: ticket.message,
        status: value,
        priority: ticket.priority,
      });
      setTicket(updated);
      message.success(t('success'));
    } catch {
      setCurrentStatus(previous);
      message.error(t('error'));
    }
  };

  return (
    <PageLayout>
      <div className='p-6 max-w-1/2 mx-auto'>
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
          <Descriptions.Item label={t('ticketTitle')}>{ticket?.subject}</Descriptions.Item>
          <Descriptions.Item label={t('message')}>{ticket?.message}</Descriptions.Item>
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
        <Button type="primary" variant="outlined" style={{ marginTop: 16 }}>
          <Link to="/tickets" style={{ textDecoration: 'none' }}>{t('back')}</Link>
        </Button>
      </Card>
      </div>
    </PageLayout>
  );
}

export default TicketView;