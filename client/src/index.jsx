import React from 'react';
import "./index.css";
import '@fontsource/inter';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {LoginApp, LandingApp, RegistApp} from './pages/';//jangan lupa tambah kalau ada page baru

// Definisikan routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginApp />,
  },
  {
    path: "/registrasi",
    element: <RegistApp />,
  },
  {
    path: "/landing",
    element: <LandingApp />,
  },
]);

// Render aplikasi dengan routing
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);