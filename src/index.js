import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './page/Home';
import AboutPage from './page/About';
import OrderNowPage from './page/OrderNow';
import GrabFoodPage from './page/GrabFoodOutlet';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/order"} element={<OrderNowPage />} />
        <Route path={"/order/grab-food-outlet"} element={<GrabFoodPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
