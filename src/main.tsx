import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from '@routes/Router';
import { RouterProvider } from 'react-router-dom';
import './index.css';

import { PhotovoltaicComponentProvaider } from './contexts/PhotovoltaicComponentContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <PhotovoltaicComponentProvaider>
         <RouterProvider router={Router} />
      </PhotovoltaicComponentProvaider>
   </React.StrictMode>
);
