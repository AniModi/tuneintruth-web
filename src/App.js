import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Articles from './Pages/Articles';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  console.log(token);
  useEffect(() => {
    if(token) {
      navigate('/articles');
    }
  }, [token, navigate]);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {token && <Route path="/articles" element={<Articles></Articles>} />}
    </Routes>
  );
}

export default App;
