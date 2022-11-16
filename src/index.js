import React from 'react';
import ReactDOM from 'react-dom/client';
import PortalReactDom from 'react-dom';
import { Resume } from './components/resume';
import { ToggleTheme } from './components/toggleTheme';
import { ThemeProvider } from './components/themeProvider';

const resumeRoot = document.getElementById('resume-root');
const toggelThemeRoot = document.getElementById('toggle-theme-root');
const themeProviderRoot = ReactDOM.createRoot(document.getElementById('toggle-theme-root'));

const ThemeProviderRoot = () => 
    <ThemeProvider>
      <>
        {PortalReactDom.createPortal(<ToggleTheme />, toggelThemeRoot)}
        {PortalReactDom.createPortal(<Resume />, resumeRoot)}
      </>
    </ThemeProvider>

themeProviderRoot.render(
  <React.StrictMode>
    <ThemeProviderRoot />
  </React.StrictMode>
);
