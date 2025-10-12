import React from 'react'

import FeatureCard from './ClothingSection/FeatureCard.jsx';
import {FEATURES_CONFIG} from '../configs/common.jsx';
import Heading from './heading.jsx';

function FeatureSection() {
  return (
    <div>
  
  <Heading heading="why we choose buying a clothing service"/> 

      <div className=' flex flex-row flex-wrap  justify-center mt-10 '>
        {FEATURES_CONFIG.map((featureObj)=>{
        const {title,description,icon}=featureObj;
        return (
          <FeatureCard 
          title={title} 
          description={description} 
          icon={icon} 
          key={title}/>
        );
        })} 
    </div>
    </div>
  );
}

export default FeatureSection;
