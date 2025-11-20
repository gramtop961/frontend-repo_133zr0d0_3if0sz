import Navbar from './components/Navbar';
import HeroCloestic from './components/HeroCloestic';
import Collection from './components/Collection';
import Promo from './components/Promo';
import BrandFooter from './components/BrandFooter';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroCloestic />
      <Collection />
      <Promo />
      <BrandFooter />
    </div>
  );
}

export default App;
