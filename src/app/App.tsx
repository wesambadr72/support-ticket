import { ConfigProvider, theme as antTheme } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from '../context/ThemeProvider';
import { useTheme } from '../context/theme';
import '../config/i18n';
import Router from './router';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ConfiguredApp />
      </BrowserRouter>
    </ThemeProvider>
  );
}


function ConfiguredApp() {
  const { i18n } = useTranslation();
  const { mode } = useTheme();

  return (
    <ConfigProvider
      direction={i18n.dir(i18n.language)}
      theme={{
        algorithm: mode === 'dark' ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
        token: {
          colorBgContainer: 'var(--color-surface)',
          colorText: 'var(--color-text)',
          colorBorder: 'var(--color-border)',
        },
        components: {
          Table: {
            headerBg: 'var(--table-header-bg)',
            rowHoverBg: 'var(--table-row-hover-bg)',
            rowSelectedBg: 'var(--table-selected-row-bg)',
            borderColor: 'var(--table-border-color)',
          },
        },
      }}
    >
      <Router />
    </ConfigProvider>
  );
}

export default App;