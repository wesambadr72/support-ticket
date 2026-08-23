import { Descriptions, Card, Button, Statistic, Select, message } from 'antd';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import PageLayout from '../components/layout/pagelayout';
import { ticketService } from '../services/ticket.service';
import { TICKET_STATUSES } from '../constants/tickets';
import { statusLabelKey } from '../utils/ticket';
import type { Status } from '../types/ticket';

function TicketView() {
  const { id } = useParams();
  const ticket = ticketService.getById(id);
  const { t } = useTranslation('tickets');
  const [currentStatus, setCurrentStatus] = useState<Status | undefined>(ticket?.status);

  const statusOptions = TICKET_STATUSES.map((value) => ({
    value,
    label: t(statusLabelKey[value]),
  }));

  const handleStatusChange = (value: Status) => {
    setCurrentStatus(value);
    if (ticket) {
      ticketService.updateStatus(ticket.id, value);
      message.success(t('success'));
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
        <Button type="primary" variant="outlined" style={{ marginTop: 16 }}>
          <Link to="/tickets" style={{ textDecoration: 'none' }}>{t('back')}</Link>
        </Button>
      </Card>
      </div>
    </PageLayout>
  );
}

export default TicketView;