import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { IsLoadingContextProvider } from './contexts/IsLoadingContextProvider.jsx';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme.js';
import { CssBaseline } from '@mui/material';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <IsLoadingContextProvider>
          <CssBaseline />
          <App />
        </IsLoadingContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
