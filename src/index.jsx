import React from 'react';
import "./index.css";
import { createRoot } from 'react-dom/client';
 
const element = <h1 className='text-xl text-blue-700'>Ini adalah Page Registrasi</h1>;
 
const root = createRoot(document.getElementById('root'));
root.render(element);