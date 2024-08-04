
import React, { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from './body/home.jsx';
import Footer from './footer/footer.jsx';
import Wallet from './components/wallet/wallet.jsx';
import Setting from './components/settings/settings.jsx';
import Task from './components/missions/task.jsx';
import Invite from './components/invite/invite.jsx';





import './App.css';





function App() {




  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/task" element={<Task />} />
        <Route path="/invite" element={<Invite />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
