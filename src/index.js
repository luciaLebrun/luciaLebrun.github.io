import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Me from './routes/me/Me';
import Projects from './routes/projects/Projects';

const rootElement = document.getElementById('root')
ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>} />
    <Route path="/me" element={<Me />} />
    <Route path="/projects" element={<Projects />} />
  </Routes>
  </BrowserRouter>,
  rootElement
);

