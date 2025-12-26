import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MensLeaderboard from './components/MensLeaderboard';
import WomensLeaderboard from './components/WomensLeaderboard';
import MensRunningLeaderboard from './components/MensRunningLeaderboard';
import WomensRunningLeaderboard from './components/WomensRunningLeaderboard';
import MensMonthlyLeaderboard from './components/MensMonthlyLeaderboard';
import WomensMonthlyLeaderboard from './components/WomensMonthlyLeaderboard';
import MensYearlyLeaderboard from './components/MensYearlyLeaderboard';
import WomensYearlyLeaderboard from './components/WomensYearlyLeaderboard';
import MensRunningYearlyLeaderboard from './components/MensRunningYearlyLeaderboard';
import WomensRunningYearlyLeaderboard from './components/WomensRunningYearlyLeaderboard';
import SingleActivity from './components/SingleActivity';
import Documentation from './components/Documentation';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MensLeaderboard />} />
          <Route path="/mens_leaderboard" element={<MensLeaderboard />} />
          <Route path="/womens_leaderboard" element={<WomensLeaderboard />} />
          <Route path="/mens_running_leaderboard" element={<MensRunningLeaderboard />} />
          <Route path="/womens_running_leaderboard" element={<WomensRunningLeaderboard />} />
          <Route path="/mens_monthly_leaderboard" element={<MensMonthlyLeaderboard />} />
          <Route path="/womens_monthly_leaderboard" element={<WomensMonthlyLeaderboard />} />
          <Route path="/mens_yearly_leaderboard" element={<MensYearlyLeaderboard />} />
          <Route path="/womens_yearly_leaderboard" element={<WomensYearlyLeaderboard />} />
          <Route path="/mens_running_yearly_leaderboard" element={<MensRunningYearlyLeaderboard />} />
          <Route path="/womens_running_yearly_leaderboard" element={<WomensRunningYearlyLeaderboard />} />
          <Route path="/single_activity" element={<SingleActivity />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
