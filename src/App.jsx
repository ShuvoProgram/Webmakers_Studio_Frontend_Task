import './App.css'
import Company from './components/Company';
import Contract from './components/Contract';
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
      <Contract/>
    </>
  )
}

export default App;
