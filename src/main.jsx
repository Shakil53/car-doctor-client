import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './Contex/AuthProvider';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster position='top-center'></Toaster>
      </AuthProvider>
    </React.StrictMode>
  </div>,
)
