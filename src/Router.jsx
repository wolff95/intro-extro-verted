import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Landing from './components/pages/Landing';
import Questions from './components/pages/Questions';
import Result from './components/pages/Result';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Landing />} />
        <Route path='questions' element={<Questions />} />
        <Route path='result' element={<Result />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
