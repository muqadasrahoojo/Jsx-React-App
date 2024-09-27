import './App.css';
import Header from './components/header/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HeroSection from './components/herosection/HeroSection';

function App() {
  return (
    <div className="App">
     < Header />
     < HeroSection />
    </div>
  );
}

export default App;
