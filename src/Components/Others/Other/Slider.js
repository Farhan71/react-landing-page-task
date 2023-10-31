import React, { useState } from "react";
import "./Other.css";
import { AiFillStar } from "react-icons/ai";
import { reviews } from "../../../Assets/Data/data";
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";


const Slider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? reviews.length - 2 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current >= reviews.length - 2 ? 0 : current + 1);
  };

  return (
    <div className="slider">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${current * 50}%)` }}
      >
        {reviews.map((review, index) => (
          <div className="slide" key={index}>
            <div className="slider-image">
                <img src={review.image} alt={`slide ${index}`} />
            </div>
            <p>{review.review}</p>
            <div className="testimonials-stars-container">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h2>{review.reviewer}</h2>
          </div>
        ))}
      </div>
      <button className="prev" onClick={() => prevSlide()}>
      <GrCaretPrevious />
      </button>
      <button className="next" onClick={() => nextSlide()}>
      <GrCaretNext />
      </button>
    </div>
  );
};

export default Slider;
