import React from 'react';
import "./index.css";
import '@fontsource/inter';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {LoginApp, LandingApp, RegistApp, DasboardApp, DetailApp} from './pages/';//jangan lupa tambah kalau ada page baru

// Definisikan routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingApp />,
  },
  {
    path: "/registrasi",
    element: <RegistApp />,
  },
  {
    path: "/login",
    element: <LoginApp />,
  },
  {
    path: "/dasboard",
    element: <DasboardApp/>,
  },
  {
    path: "/detail/:id",
    element: <DetailApp/>,
  },
]);

// Render aplikasi dengan routing
ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);