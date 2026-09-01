import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Commentary from './pages/Commentary';
import Sharing from './pages/Sharing';
import Worship from './pages/Worship';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen max-w-md mx-auto bg-[#fff5ee] shadow-2xl relative overflow-hidden sm:rounded-[2.5rem] border border-gray-100 transition-colors duration-500">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/commentary" element={<Commentary />} />
            <Route path="/sharing" element={<Sharing />} />
            <Route path="/worship" element={<Worship />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
