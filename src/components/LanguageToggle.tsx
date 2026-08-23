import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const isEn = i18n.language.startsWith('en');
  const other = isEn ? 'ar' : 'en';
  return (
    <Button onClick={() => i18n.changeLanguage(other)} type="primary">
      {isEn ? 'عربي' : 'English'}
    </Button>
  );
}