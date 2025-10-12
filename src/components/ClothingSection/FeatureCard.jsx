import React from 'react'

function FeatureCard({title,description,icon}) {
  return(
          
        <div key={title} className='bg-white m-5 p-5 w-[333px] py-6 rounded-md flex flex-row shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out'>
        <div className=' flex justify-center'>{icon}</div>
        <h3 className=' flex text-xl text-center pb-6 font-bold'>{title}</h3>
        <p className='text-gray-500 pt-4 px-3'>{description}</p>
        </div>
        );
    
}

export default FeatureCard
