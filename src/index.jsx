import React from 'react';
import "./index.css";
import { createRoot } from 'react-dom/client';

import LandingApp from './pages/LandingApp';
import '@fontsource/inter';

const element = <LandingApp/>;
 
const root = createRoot(document.getElementById('root'));
root.render(element);