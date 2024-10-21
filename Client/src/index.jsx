import React from 'react';
import "./index.css";
import { createRoot } from 'react-dom/client';
import LoginApp from './pages/LoginApp';
import '@fontsource/inter';

const element = <LoginApp/>;
 
const root = createRoot(document.getElementById('root'));
root.render(element);