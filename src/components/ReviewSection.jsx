import React from 'react'
 import Heading from './heading.jsx'
import { REVIEW_CONFIG } from '../configs/common.jsx'
import ReviewCard from './ReviewCard.jsx'


function ReviewSection() {
  return (
    <div>
     <Heading heading="what our customer says..."/>
     <Heading heading="customer Review"/>

     <div className='flex flex-wrap justify-center'>

     {REVIEW_CONFIG.map((reviewObj)=>{
      const {name,review,rating,avatar}=reviewObj;
      return(
        <ReviewCard
        key={name}
        name={name}
        review={review}
        rating={rating}
        avatar={avatar}/>
      )
     })}
     </div>
     </div>
)
};


export default ReviewSection;
