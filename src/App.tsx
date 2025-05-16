import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      {/* Other sections can go here */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;