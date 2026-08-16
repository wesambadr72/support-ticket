import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ConfigProvider } from 'antd';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      button={{ className: 'custom-button-class' }}
      theme={{
        token: {
          colorPrimary: '#ff6200fc',
        },
      }}
    >
    <App />
    </ConfigProvider>
  </StrictMode>,
)
