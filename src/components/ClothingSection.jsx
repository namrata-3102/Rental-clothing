import React from 'react'

import FeatureCard from './ClothingSection/FeatureCard.jsx';
import {FEATURES_CONFIG} from '../configs/common.jsx';
import Heading from './heading.jsx';

function FeatureSection() {
  return (
    <div className='bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 py-20 relative overflow-hidden'>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />
      
      <Heading heading="Why Choose Our Clothing Rental?"/> 
      <p className='text-center text-slate-600 mb-12 px-4 text-lg max-w-2xl mx-auto'>Premium quality, affordable prices, and exceptional service that transforms the way you dress</p>
      <div className='flex flex-row flex-wrap justify-center gap-8 max-w-6xl mx-auto'>
        {FEATURES_CONFIG.map((featureObj, idx)=>{
        const {title,description,icon}=featureObj;
        return (
          <FeatureCard 
          title={title} 
          description={description} 
          icon={icon} 
          key={title}
          index={idx}/>
        );
        })} 
      </div>
    </div>
  );
}

export default FeatureSection;
