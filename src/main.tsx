import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'

console.log("Main.tsx executing...");
console.log("DOM loaded, initializing React app");
console.log("Current URL:", window.location.href);
console.log("Environment mode:", import.meta.env.MODE);

// Ensure DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

function initializeApp() {
  console.log("Initializing app...");
  
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("Root element not found!");
    document.body.innerHTML = `
      <div style="padding: 20px; text-align: center;">
        <h1>Error: Root element not found</h1>
        <p>The application could not start properly.</p>
      </div>
    `;
    return;
  }

  console.log("Root element found, creating React root...");
  
  try {
    const root = createRoot(rootElement);
    console.log("Rendering App...");
    root.render(
      <HelmetProvider>
        <App />
      </HelmetProvider>
    );
    console.log("App rendered successfully");
  } catch (error) {
    console.error("Failed to render app:", error);
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center;">
        <h1>Error: Failed to start application</h1>
        <p>Please refresh the page and try again.</p>
        <p style="color: red; font-size: 12px;">${error}</p>
      </div>
    `;
  }
}
