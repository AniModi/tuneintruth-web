import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Articles from './Pages/Articles';

function App() {
  const token = localStorage.getItem('token');
  console.log(token);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {token && <Route path="/articles" element={<Articles></Articles>} />}
    </Routes>
  );
}

export default App;
