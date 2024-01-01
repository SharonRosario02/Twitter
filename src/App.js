import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './pages/ProtectedRoute';
import Home from './pages/Home/home';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
