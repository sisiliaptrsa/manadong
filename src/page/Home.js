import './Home.css';
import '../Components/Produk/Card.css';
import '../Components/Produk/Popup.css'
import Home from '../Components/Home';
import Menu from '../Components/Menu';
import Promotion from '../Components/Promotion';
import Reviews from '../Components/Reviews';
import Footer from '../Components/Footer';
import Location from '../Components/Location';

function HomePage() {
  return (
    <div className="App">
      <Home />
      <Menu />
      <Promotion />
      <Reviews />
      <Location />
      <Footer />
    </div>
  );
}

export default HomePage;