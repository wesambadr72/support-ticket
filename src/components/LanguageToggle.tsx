import { Button } from 'antd';
import { useLanguage } from '../LanguageContext';

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();
  return (
    <Button onClick={toggle} type="default" size="small">
      {lang === 'en' ? 'العربية' : 'English'}
    </Button>
  );
}