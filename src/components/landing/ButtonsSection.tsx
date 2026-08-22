import { Button, Flex, Tooltip, FloatButton, Divider } from 'antd';
import { SearchOutlined, DownloadOutlined, StepForwardFilled, AnthropicFilled } from '@ant-design/icons';

export default function ButtonsSection() {
  return (
    <div id="ticket" className='w-full min-h-screen flex flex-col justify-center items-center p-8 mb-8'>
      <h1 className='font-black text-3xl text-center'>Buttons</h1>
      <div className='mt-8'>
        <Flex gap="small" vertical>
          <Flex wrap gap="small">
            <Tooltip title="Search">
              <Button type="primary" shape='circle' color='pink' variant="solid" icon={<SearchOutlined />} iconPlacement="end" />
            </Tooltip>
            <Divider vertical />
            <Tooltip title="Primary">
              <Button type="primary" color='red' variant="outlined"><StepForwardFilled /></Button>
            </Tooltip>
            <Divider dashed vertical />
            <Button disabled type="primary" color='red' variant="outlined">Primary Disabled</Button>
            <Divider dashed vertical />
            <Tooltip title="Download">
              <Button type="primary" color='blue' variant="solid" icon={<DownloadOutlined />} iconPlacement="end">Download Button</Button>
            </Tooltip>
            <Divider dashed vertical />
            <Button type="primary" icon={<AnthropicFilled />}> Anthropic Button</Button>
          </Flex>
        </Flex>
      </div>
      <FloatButton
        onClick={() => alert('Download Button Clicked')}
        type='primary'
        icon={<DownloadOutlined />}
        tooltip={{ title: 'Download Button', placement: 'left' }}
      />
    </div>
  );
}