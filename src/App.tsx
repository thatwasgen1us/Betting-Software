import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};

export default App;
