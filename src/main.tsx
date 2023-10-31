import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router';
import { router } from './routes/router';
import { GlobalStyles } from '@mui/styled-engine';
import Theme from './shared/theme/Theme';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles styles={{ body: { margin: 0, padding: 0 } }} />
      <Theme>
        <RouterProvider router={router} />
      </Theme>
    </QueryClientProvider>
  </React.StrictMode>
);
