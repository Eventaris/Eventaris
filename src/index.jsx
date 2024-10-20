import React from 'react';
import "./index.css";
import { createRoot } from 'react-dom/client';
import RegistApp from './pages/RegistApp';
import '@fontsource/inter';

const element = <RegistApp/>;
 
const root = createRoot(document.getElementById('root'));
root.render(element);