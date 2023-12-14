import './App.css'
import Company from './components/Company';
import Contract from './components/Contract';
import Footer from './components/Footer';
import FrequentlyAsked from './components/FrequentlyAsked';
import HeroSection from './components/HeroSection'
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';

function App() {

  return (
    <>
      <HeroSection />
      <Company/>
      <Testimonial/>
      <Pricing/>
      <FrequentlyAsked/>
      <div className='pt-10 bg-gradient-to-r from-gray-100 via-[#bce1ff3c] to-gray-100'>
      <Contract/>
      <Footer/>
      </div>
    </>
  )
}

export default App;
