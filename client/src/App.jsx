import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Booking from './pages/Booking';
import Chat from './pages/Chat';
import Admin from './pages/Admin';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Booking />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/admin" element={<Admin />} />
        {/* Placeholder routes for others */}
        <Route path="/" element={<div style={{padding: '50px', textAlign: 'center'}}><h2>Home Navigation</h2>
          <a href="/auth" style={{display:'block', margin:'10px'}}>Go to Auth</a>
          <a href="/checkout" style={{display:'block', margin:'10px'}}>Go to Booking</a>
          <a href="/chat" style={{display:'block', margin:'10px'}}>Go to Chat</a>
          <a href="/admin" style={{display:'block', margin:'10px'}}>Go to Admin Dashboard</a>
        </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
