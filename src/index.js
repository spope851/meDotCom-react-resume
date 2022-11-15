import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import PortalReactDom from 'react-dom';
import { Resume } from './components/resume';
import { ToggleTheme, ColorModeContext } from './components/toggleTheme';
import { createTheme, ThemeProvider as MuiProvider } from '@mui/material/styles';

const resumeRoot = document.getElementById('resume-root');
const toggelThemeRoot = document.getElementById('toggle-theme-root');
const themeProviderRoot = ReactDOM.createRoot(document.getElementById('toggle-theme-root'));

const ThemeProviderRoot = () => {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(() => ({
      toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
  }), []);

  const theme = useMemo(() => createTheme({
      palette: {
          mode,
      },
  }), [mode]);
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiProvider theme={theme}>
        <>
          {PortalReactDom.createPortal(<ToggleTheme />, toggelThemeRoot)}
          {PortalReactDom.createPortal(<Resume />, resumeRoot)}
        </>
      </MuiProvider>
    </ColorModeContext.Provider>
  )}

themeProviderRoot.render(
  <React.StrictMode>
    <ThemeProviderRoot />
  </React.StrictMode>
);
