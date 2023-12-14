import './App.css'
import Company from './components/Company';
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
    </>
  )
}

export default App;
