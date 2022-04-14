
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSectionTwo() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Products</h1>
      <p>Are you ready?</p>
      
      <div className='hero-btns'>  
      </div>
    </div>
  )
}

export default HeroSectionTwo