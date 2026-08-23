import { Form, Input, Button, Card, Select } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageLayout from '../components/layout/PageLayout';
import { ticketService } from '../services/ticket.service';
import { TICKET_PRIORITIES, TICKET_STATUSES } from '../constants/tickets';
import { priorityLabelKey, statusLabelKey } from '../utils/ticket';
import type { TicketInput } from '../types/ticket';

function TicketEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const ticket = ticketService.getById(id);
  const { t } = useTranslation('tickets');

  const initialValues: TicketInput | undefined = ticket
    ? { title: ticket.title, status: ticket.status, priority: ticket.priority }
    : undefined;

  return (
    <PageLayout>
      <div className='p-24 max-w-150 mx-auto'>
      <Card title={t('editTicket')}>
        <Form<TicketInput>
          layout="vertical"
          initialValues={initialValues}
          onFinish={(values) => {
            if (ticket) {
              ticketService.update(ticket.id, values);
            }
            navigate('/tickets');
          }}
        >
          <Form.Item name="title" label={t('ticketTitle')} rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="status" label={t('status')}>
            <Select
              options={TICKET_STATUSES.map((value) => ({ value, label: t(statusLabelKey[value]) }))}
            />
          </Form.Item>
          <Form.Item name="priority" label={t('priority')}>
            <Select
              options={TICKET_PRIORITIES.map((value) => ({ value, label: t(priorityLabelKey[value]) }))}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            {t('update')}
          </Button>
        </Form>
      </Card>
      </div>
    </PageLayout>
  );
}

export default TicketEdit;