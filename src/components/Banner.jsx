/* eslint-disable react/jsx-key */
import banner from '../assets/Frame9.png';
import banner2 from '../assets/Frame10.png';
import banner3 from '../assets/Frame11.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const slider = [
  {
    id: 1,
    img: banner
  },
  {
    id: 2,
    img: banner2
  },
  {
    id: 3,
    img: banner3
  },
  {
    id: 4,
    img: banner
  },
  {
    id: 5,
    img: banner2
  },
]

function Banner() {
  const Settings = {
    dots: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    swipeToSlide: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='py-20'>
      <div className='mx-10'>
      <Slider {...Settings}>
        {
          slider.map(sl => (
            <img src={sl.img} alt={sl.id} key={sl.id}/>
          ))
        }
       </Slider>
      </div>
        <div className='mt-14 flex justify-center items-center'>
            <a href="" className="block w-1/2 md:w-1/4 border border-gray-600 rounded-md py-2 text-sm font-semibold text-gray-600 text-center">View recent work</a>
        </div>
    </div>
  )
}

export default Banner