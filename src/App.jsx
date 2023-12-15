import './App.css'
import Banner from './components/Banner';
import Company from './components/Company';
import Contract from './components/Contract';
import Footer from './components/Footer';
import FrequentlyAsked from './components/FrequentlyAsked';
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Steps from './components/Steps';
import Testimonial from './components/Testimonial';

function App() {

  return (
    <>
    <div className='pt-10 bg-gradient-to-r from-gray-100 via-[#bce1ff3c] to-gray-100'>
    <Navbar/>
      <HeroSection />
    </div>
      <Company/>
      <Banner/>
      <Steps/>
      <Testimonial/>
     <div className='pt-10 bg-gradient-to-r from-gray-100 via-[#bce1ff3c] to-gray-100'>
     <Pricing/>
      <FrequentlyAsked/>
     </div>
      <div className='pt-10 bg-gradient-to-r from-gray-100 via-[#bce1ff3c] to-gray-100'>
      <Contract/>
      <Footer/>
      </div>
    </>
  )
}

export default App;
