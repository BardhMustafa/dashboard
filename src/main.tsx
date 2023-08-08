import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router';

import { router } from './routes/router';
import { GlobalStyles } from '@mui/styled-engine';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles styles={{ body: { margin: 0 } }} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
