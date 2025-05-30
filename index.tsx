
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Global styles can be defined here if not using a separate CSS file,
// but Tailwind is primarily handled via CDN and utility classes.
// Example: import './index.css'; (if you had one, but instructions say no .css files)

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
    