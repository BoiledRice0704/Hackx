import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setIndex} from '../slices/generalSlice';


const Carousel = ({ images }) => {
  const dispatch = useDispatch()
  const currentIndex = useSelector((state)=>state.counter.index)
  // const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setIndex((currentIndex + 1) % totalSlides));
    }, 2000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, totalSlides]);

  return (
    <div className="">
      <div className="carousel">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentIndex ? 'block' : 'hidden'}`}
            >
              <img src={image} alt={`Slide ${index + 1}`} className='w-80 mx-auto' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;