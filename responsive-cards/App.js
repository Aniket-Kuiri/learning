import './App.css';
import { Routes, Route } from 'react-router-dom';
import SectionDisplay from './Section-Display';
import MainDisplay from './Main-Display';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainDisplay />}></Route>
      <Route path="/section" element={<SectionDisplay />}></Route>
    </Routes>

  );

}

export default App;
