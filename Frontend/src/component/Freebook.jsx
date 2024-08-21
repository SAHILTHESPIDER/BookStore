import React from 'react';
// import list from "../../public/list.json";
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

 function Freebook() {
  const FilterData = list.filter((data) => data.category === "Free");
  // const FilterData=list.filter((data)=>data.catefory==="Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 font-serif '>
        <div>
        <h1 className='font-semibold pb-2 text-xl '>Free Offered Course</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          eligendi quisquam maiores magnam! Saepe ducimus nesciunt porro, hic
          maiores repellendus facere illo ipsum ea quaerat fuga consequatur sit
          cupiditate? Quisquam.
        </p>
      </div>
     
      <div>
      <Slider {...settings}>
        
        {FilterData.map((item)=>(
        <Cards item={item} key={item.id}/>))}
        
      </Slider>
      </div>
      </div>
    </>
  );
}
export default Freebook;