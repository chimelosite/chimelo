
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import WhatsAppButton from './components/WhatsAppButton.tsx';

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <WhatsAppButton phoneNumber="5551991786703" />
  </>
);
