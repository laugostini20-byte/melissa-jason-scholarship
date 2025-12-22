import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Eligibility from './pages/Eligibility';
import Apply from './pages/Apply';
import Donate from './pages/Donate';
import Recipients from './pages/Recipients';
import Events from './pages/Events';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Donors from './pages/Donors';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/eligibility" element={<Eligibility />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/recipients" element={<Recipients />} />
            <Route path="/donors" element={<Donors />} />
            <Route path="/events" element={<Events />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
