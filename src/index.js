import React from 'react';
import ReactDOM from 'react-dom/client';
import { Resume } from './components/resume';
import { ThemeProvider, ToggleTheme } from './components/themeProvider';

const resumeRoot = ReactDOM.createRoot(document.getElementById('resume-root'));
resumeRoot.render(
  <React.StrictMode>
    <ThemeProvider>
      <Resume />
    </ThemeProvider>
  </React.StrictMode>
);

const toggelThemeRoot = ReactDOM.createRoot(document.getElementById('toggle-theme-root'));
toggelThemeRoot.render(
  <React.StrictMode>
    <ThemeProvider>
      <ToggleTheme />
    </ThemeProvider>
  </React.StrictMode>
);
