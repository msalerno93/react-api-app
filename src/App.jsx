import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage';
import ShowPage from './pages/showpage/ShowPage';

function App() {

 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/show" element={<ShowPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
