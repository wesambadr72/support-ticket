import { Form, Input, Button, Card, Select } from 'antd';
import { dataSource } from '../data/tickets';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';


function TicketCreate() {
  const navigate = useNavigate();
  const { t } = useLanguage();


  return (
    <div className='p-24 max-w-1/2 mx-auto'>
      <Card title={t.createTicket}>
        <Form
          layout="vertical"
          onFinish={(values) => {
            dataSource.push({id:String(dataSource.length+1),...values});
            console.log(values);
            navigate('/tickets');
          }}
        >
          <Form.Item name="title" label={t.title} rules={[{ required: true }]}>
            <Input placeholder={t.title} />
          </Form.Item>
          <Form.Item name="status" label={t.status}>
            <Select
             options={[
              { value: 'Open', label: t.open },
              { value: 'In Progress', label: t.inProgress },
              { value: 'Closed', label: t.closed },
            ]} />
          </Form.Item>
          <Form.Item name="priority" label={t.priority}>
            <Select
             options={[
              { value: 'High', label: t.high },
              { value: 'Medium', label: t.medium },
              { value: 'Low', label: t.low },
            ]} />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            {t.save}
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default TicketCreate;