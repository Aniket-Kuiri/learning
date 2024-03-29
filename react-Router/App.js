
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Books from './Books';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/books" element={<Books />}></Route>
    </Routes>
  );
}

export default App;
