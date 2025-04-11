import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800">
        {/* ✅ Navbar */}
        <nav className="bg-green-800 text-white p-4 flex justify-center gap-8 text-lg font-semibold shadow">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* ✅ Page Content */}
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
