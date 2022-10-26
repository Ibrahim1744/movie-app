import React, { useState } from 'react';
import './slide.css'
import { SliderData } from '../../data';
import {AiFillCaretRight} from 'react-icons/ai'
import {AiFillCaretLeft} from 'react-icons/ai'
const SliderImages = () => {
  const [current,setCurrent]=useState(0)
  const sliderLength=SliderData.length
  const nextImg=()=>{
  
    setCurrent(current === sliderLength - 1 ? 0 : current + 1)
  }
  const prevImg=()=>{
    setCurrent(current === 0 ? sliderLength - 1 : current - 1)
  }
  return (
    <>
    <div className='slider'>
    <AiFillCaretLeft className='left-arrow' onClick={prevImg} />
        <AiFillCaretRight className='right-arrow' onClick={nextImg}/>
        {
          SliderData.map((slide,index)=>{
            return(
              <div className={ index === current ? 'slide active' : 'slide' }>
                {index===current &&  (<img className='slider-img' src={slide.image} alt="movie-img" />)}        

              </div>
            )
          })
        }

      


      </div>
    </>
  );
}

export default SliderImages;
