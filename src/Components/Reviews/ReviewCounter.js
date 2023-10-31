import React, { useState } from 'react';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./ReviewCounter.css"

const ReviewCounter = ({ number, title }) => {
    const [counterOn , setCounterOn ] = useState(false);


  return (
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}> 
         <div  className="number">
            { counterOn && <CountUp duration={3} className="counter" end={number} /> }
            <span>{title}</span>
        </div>
    </ScrollTrigger>
   
  );
};

export default ReviewCounter;