import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { registerServiceWorker } from './utils/registerSW'

createRoot(document.getElementById("root")!).render(<App />);

// Register service worker for caching
registerServiceWorker();
