import { Button } from 'antd';
import { MoonFilled, SunFilled } from '@ant-design/icons';
import { useTheme } from '../context/theme';

export default function ThemeToggle() {
  const { mode, toggle } = useTheme();
  return (
    <Button onClick={toggle} type="primary" shape="circle">
      {mode === 'dark' ? <SunFilled /> : <MoonFilled />}
    </Button>
  );
}