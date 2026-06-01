import './App.css';
import Nav from './component/Nav';
import Main from './pages/Main';
import Buy_page from './pages/Buy-page';
import Sell_page from './pages/Sell-page';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/buy" element={<Buy_page/>} />
        <Route path="/sell" element={<Sell_page/>} />
      </Routes>
    </div>
  );
}

export default App;
