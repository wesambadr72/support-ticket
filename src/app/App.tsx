import { ConfigProvider, theme as antTheme } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from '../context/ThemeProvider';
import { useTheme } from '../context/theme';
import '../config/i18n';
import Router from './router';

function App() {
  const { i18n } = useTranslation();
  const { mode } = useTheme();
  return (
    <ConfigProvider
      button={{ className: 'custom-button-class' }}
      direction={i18n.dir(i18n.language)}
      theme={{
        algorithm: mode === 'dark' ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
      }}
    >
      <ThemeProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </ConfigProvider>

  );
}

export default App;