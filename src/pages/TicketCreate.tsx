import { Form, Input, Button, Card, Select } from 'antd';
import { dataSource } from '../data/tickets';
import { useNavigate } from 'react-router-dom';

function TicketCreate() {
  const navigate = useNavigate();

  return (
    <div className='p-24 max-w-1/2 mx-auto'>
      <Card title="Create Ticket">
        <Form
          layout="vertical"
          onFinish={(values) => {
            dataSource.push({...values,id:dataSource.length+1});
            console.log(values);
            navigate('/tickets');
          }}
        >
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input placeholder="Ticket title" />
          </Form.Item>
          <Form.Item name="status" label="Status">
            <Select
             options={[
              { value: 'Open', label: 'Open' },
              { value: 'In Progress', label: 'In Progress' },
              { value: 'Closed', label: 'Closed' },
            ]} />
          </Form.Item>
          <Form.Item name="priority" label="Priority">
            <Select
             options={[
              { value: 'High', label: 'High' },
              { value: 'Medium', label: 'Medium' },
              { value: 'Low', label: 'Low' },
            ]} />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default TicketCreate;