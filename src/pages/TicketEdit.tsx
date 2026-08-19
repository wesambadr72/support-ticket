import { Form, Input, Button, Card, Select } from 'antd';
import { getTicketById } from '../data/tickets';
import { useNavigate, useParams } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

function TicketEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const ticket = getTicketById(id);
  const {t} = useLanguage();
  
  return (
    <div className='p-24 max-w-150 mx-auto'>
      <Card title={t.editTicket}>
        <Form
          layout="vertical"
          initialValues={{ status: 'Open' }}
          onFinish={(values) => {
                if (ticket) {
                  Object.assign(ticket, values);
                }
            console.log(id, values);
            navigate('/tickets');
          }}
        >
          <Form.Item name="title" label={t.title} rules={[{ required: true }]}>
            <Input placeholder={ticket?.title}></Input>
          </Form.Item>
          <Form.Item name="status" label={t.status}>
            <Select
              options={[
                { value: 'Open', label: t.open },
                { value: 'In Progress', label: t.inProgress },
                { value: 'Closed', label: t.closed },
              ]}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            {t.update}
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default TicketEdit;