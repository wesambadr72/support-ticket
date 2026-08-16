import { Form, Input, Button, Card, Select } from 'antd';
import { dataSource, getTicketById } from '../data/tickets';
import { useNavigate, useParams } from 'react-router-dom';

function TicketEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const ticket = getTicketById(id);
  
  return (
    <div className='p-24 max-w-150 mx-auto'>
      <Card title={`Edit Ticket ${id}`}>
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
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input placeholder={ticket?.title}></Input>
          </Form.Item>
          <Form.Item name="status" label="Status">
            <Select
              options={[
                { value: 'Open', label: 'Open' },
                { value: 'In Progress', label: 'In Progress' },
                { value: 'Closed', label: 'Closed' },
              ]}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default TicketEdit;