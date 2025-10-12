import React from 'react'
import imgStar from './../assets/star.png';
import imgUnstar from './../assets/unstar.png';
function ReviewCard( {name,review,rating,avatar})
    {
  return (
  <div className='border p-4 m-4 rounded-lg shadow-lg flex flex-col items-center max-w-md'>
      <img src={avatar} 
      alt={`${name}'s avtar`}
      className='rounded-full w-16 h-16' 
      />
      <div>
        <h3 className='text-lg font-semibold'>{name}</h3>

        
   
    {Array.from({ length: Number(rating) || 0 }).map((_, i) => (
  <img 
    src={imgStar} 
    alt="star" 
    className="inline h-5 w-5 mr-2" 
    key={`star-${i}`} 
  />
))}
     
   {Array.from({ length: 5 - (Number(rating) || 0) }).map((_, i) => (
  <img 
    src={imgUnstar} 
    alt="unstar" 
    className="inline h-5 w-5 mr-2" 
    key={`unstar-${i}`} 
  />
))}
     
      <p className='text-gray-600'>{review}</p>
      </div>
    </div>
  
    );
    }
export default ReviewCard
