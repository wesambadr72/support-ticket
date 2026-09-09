import { Form, Input, Button, Card, Select, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageLayout from '../components/layout/PageLayout';
import { CreateTicket } from '../api/ticket';
import { TICKET_PRIORITIES, TICKET_STATUSES } from '../constants/tickets';
import { priorityLabelKey, statusLabelKey } from '../utils/ticket';
import type { CreateTicketInput } from '../types/ticket';

function TicketCreate() {
  const navigate = useNavigate();
  const { t } = useTranslation('tickets');

  return (
    <PageLayout>
      <div className='p-24 max-w-1/2 mx-auto'>
      <Card title={t('createTicket')}>
        <Form<CreateTicketInput>
          layout="vertical"
          onFinish={async (values) => {
            try {
              await CreateTicket(values);
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
            {t('save')}
          </Button>
        </Form>
      </Card>
      </div>
    </PageLayout>
  );
}

export default TicketCreate;