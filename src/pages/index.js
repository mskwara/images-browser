import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Results from 'pages/Results';

const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/images/:key" element={<Results />} />
  </Routes>
);

export default Routing;
