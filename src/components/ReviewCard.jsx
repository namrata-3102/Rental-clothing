import React from 'react'
import imgStar from './../assets/star.png';
import imgUnstar from './../assets/unstar.png';
function ReviewCard( {name,review,rating,avatar,color})
    {
  return (
  <div className='border p-4 m-4 rounded-lg shadow-lg flex flex-col items-center max-w-md' style={{ borderColor: color || '#e5e7eb' }}>
    {/* colored ribbon */}
    <div className='w-full h-1 rounded-t-lg mb-2' style={{ background: color || '#ddd' }} />
      <img src={avatar} 
      alt={`${name}'s avtar`}
      className='rounded-full w-16 h-16' 
      />
      <div>
        <h3 className='text-lg font-semibold flex items-center gap-2'>
          <span className='w-3 h-3 rounded-full' style={{ background: color || '#ccc' }}></span>
          <span className='px-2 py-0.5 rounded-full text-sm font-semibold' style={{ background: `${color}22` }}>{name}</span>
        </h3>

        
   
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
     
      <p className='text-gray-700 mt-2'>{review}</p>
      </div>
    </div>
  
    );
    }
export default ReviewCard
