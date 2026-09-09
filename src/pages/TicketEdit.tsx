import { Form, Input, Button, Card, Select, message } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { GetTicketById, UpdateTicket } from '../api/ticket';
import { TICKET_PRIORITIES, TICKET_STATUSES } from '../constants/tickets';
import { priorityLabelKey, statusLabelKey } from '../utils/ticket';
import type { CreateTicketInput, Ticket } from '../types/ticket';

function TicketEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useTranslation('tickets');
  const [ticket, setTicket] = useState<Ticket>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    GetTicketById(id)
      .then(setTicket)
      .catch(() => {
        message.error(t('error'));
        navigate('/tickets');
      })
      .finally(() => setLoading(false));
  }, [id, navigate, t]);

  return (
    <PageLayout>
      <div className='p-24 max-w-150 mx-auto'>
      <Card title={t('editTicket')}>
        {!loading && ticket && (
        <Form<CreateTicketInput>
          layout="vertical"
          initialValues={{
            name: ticket.name,
            email: ticket.email,
            subject: ticket.subject,
            message: ticket.message,
            status: ticket.status,
            priority: ticket.priority,
          }}
          onFinish={async (values) => {
            try {
              await UpdateTicket(ticket.id, values);
              navigate('/tickets');
            } catch {
              message.error(t('error'));
            }
          }}
        >
          <Form.Item name="name" label={t('name')} rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label={t('email')} rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="subject" label={t('subject')} rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="message" label={t('message')} rules={[{ required: true }]}>
            <Input.TextArea rows={4} />
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
        )}
      </Card>
      </div>
    </PageLayout>
  );
}

export default TicketEdit;