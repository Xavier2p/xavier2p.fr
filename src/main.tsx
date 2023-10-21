import React from 'react';
import ReactDOM from 'react-dom/client';
import Xavier2pfr from './page';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider withCssVariables defaultColorScheme="dark">
      <Xavier2pfr />
    </MantineProvider>
  </React.StrictMode>
);
