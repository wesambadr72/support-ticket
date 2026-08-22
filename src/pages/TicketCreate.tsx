import { Form, Input, Button, Card, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TicketToolbar from '../components/layout/TicketToolbar';
import { ticketService } from '../services/ticket.service';
import { TICKET_PRIORITIES, TICKET_STATUSES } from '../constants/tickets';
import { priorityLabelKey, statusLabelKey } from '../utils/ticket';
import type { TicketInput } from '../types/ticket';

function TicketCreate() {
  const navigate = useNavigate();
  const { t } = useTranslation('tickets');

  return (
    <TicketToolbar>
      <div className='p-24 max-w-1/2 mx-auto'>
      <Card title={t('createTicket')}>
        <Form<TicketInput>
          layout="vertical"
          onFinish={(values) => {
            ticketService.create(values);
            navigate('/tickets');
          }}
        >
          <Form.Item name="title" label={t('ticketTitle')} rules={[{ required: true }]}>
            <Input placeholder={t('ticketTitle')} />
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
            {t('save')}
          </Button>
        </Form>
      </Card>
      </div>
    </TicketToolbar>
  );
}

export default TicketCreate;