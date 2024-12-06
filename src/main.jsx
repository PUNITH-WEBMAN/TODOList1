import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Your CSS styles
import App from './App.jsx'; // Importing the App component

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Create the root for concurrent rendering

root.render(
  <StrictMode>
    <App />  {/* Your main component */}
  </StrictMode>
);
