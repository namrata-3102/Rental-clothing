import { Sofa,BedSingle,HandPlatter,Dock,SquareStar } from 'lucide-react';

const CATEGORY_STYLE={
    sofa:{
        icon:<Sofa className='inline-block'/>
    },
    bed:{
        icon:<BedSingle className='inline-block'/>
    },
    dining:{
        icon:<HandPlatter className='inline-block'/>
    },
    appliance:{
        icon:<Dock className='inline-block'/>
    },
    decor:{
        icon:<SquareStar className='inline-block'/>
    }
}


import React from 'react'

function CategoryBatch({category,className=""}) {
     const styleObj=CATEGORY_STYLE[category]||{};
  return (
    <span className={`flex item-center z-5 ${className}`}>
      
        {CATEGORY_STYLE[category]?.icon}
        <span className=''>{category}</span>
    </span>
  )
}

export default CategoryBatch
