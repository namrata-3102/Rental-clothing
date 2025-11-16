import React from 'react'
 import Heading from './heading.jsx'
import { REVIEW_CONFIG } from '../configs/common.jsx'
import ReviewCard from './ReviewCard.jsx'


function ReviewSection() {
  return (
    <div>
    <Heading heading="Customer Reviews"/>
    <p className="text-center text-gray-600 mb-8">See what customers are saying about our rental clothing experience.</p>

     <div className='flex flex-wrap justify-center'>

     {REVIEW_CONFIG.map((reviewObj)=>{
      const {name,review,rating,avatar,color}=reviewObj;
      return(
        <ReviewCard
        key={name}
        name={name}
        review={review}
        rating={rating}
        avatar={avatar}
        color={color}
        />
      )
     })}
     </div>
     </div>
)
};


export default ReviewSection;
