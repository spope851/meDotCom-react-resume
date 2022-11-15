import React, { useState, useMemo, createContext, useContext } from "react";
import { createTheme, useTheme, ThemeProvider as MuiProvider } from '@mui/material/styles';
import { IconButton, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ToggleTheme = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
      <IconButton sx={{ ml: 1, alignSelf: 'center' }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    )
}

export const ThemeProvider = ({ children }) => {
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
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        bgcolor: 'background.default',
                        color: 'text.primary',
                        borderRadius: 1,
                        p: 3,
                    }}
                >
                    {children}
                </Box>
            </MuiProvider>
        </ColorModeContext.Provider>
        )
}
