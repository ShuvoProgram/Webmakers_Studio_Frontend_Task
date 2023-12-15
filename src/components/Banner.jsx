/* eslint-disable react/jsx-key */
import {Carousel} from '3d-react-carousal';
import banner from '../assets/Frame9.png';
import banner2 from '../assets/Frame10.png';
import banner3 from '../assets/Frame11.png';

let slides = [
    <img  src={banner} alt="1" className='w-1/2'/>,
    <img  src={banner2} alt="2" />  ,
    <img  src={banner3} alt="3" />  ,
    <img  src={banner} alt="4" />  ,
    <img src={banner2} alt="5" />   ];

function Banner() {
  return (
    <div className='py-20'>
        <Carousel slides={slides} autoplay={true} interval={2000}/>
        <div className='mt-14 flex justify-center items-center'>
            <a href="" className="block w-1/2 md:w-1/4 border border-gray-600 rounded-md py-2 text-sm font-semibold text-gray-600 text-center">View recent work</a>
        </div>
    </div>
  )
}

export default Banner