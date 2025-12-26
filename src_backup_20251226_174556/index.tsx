import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';

import { Main } from './Main';
import { Home } from "./components/home"
import { Register } from "./components/register"
import { MaleTable } from './components/maleTable';
import { FemaleTable } from './components/femaleTable';
import { MaleYearlyTable } from './components/maleYearlyTable';
import { FemaleYearlyTable } from './components/femaleYearlyTable';
import { Documentation } from './components/documentation';
import { Help } from './components/help';
import { About } from './components/about';
import CurrentLeaders from './pages/CurrentLeaders';
import { MensRunningMonthly } from './pages/MensRunningMonthly';
import { WomensRunningMonthly } from './pages/WomensRunningMonthly';
import { MensRunningYearly } from './pages/MensRunningYearly';
import { WomensRunningYearly } from './pages/WomensRunningYearly';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="mens_leaderboard" element={<MaleTable />} />
          <Route path="womens_leaderboard" element={<FemaleTable />} />
          <Route path="mens_yearly_leaderboard" element={<MaleYearlyTable />} />
          <Route path="womens_yearly_leaderboard" element={<FemaleYearlyTable />} />
          <Route path="mens_running_monthly" element={<MensRunningMonthly />} />
          <Route path="womens_running_monthly" element={<WomensRunningMonthly />} />
          <Route path="mens_running_yearly" element={<MensRunningYearly />} />
          <Route path="womens_running_yearly" element={<WomensRunningYearly />} />
          <Route path="current_leaders" element={<CurrentLeaders />} />
          <Route path="documentation" element={<Documentation />} />
          <Route path="help" element={<Help />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

