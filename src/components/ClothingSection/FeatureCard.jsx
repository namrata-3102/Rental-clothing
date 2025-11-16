import React from 'react'

function FeatureCard({title, description, icon, index}) {
  return(
    <div 
      className='bg-white p-8 w-[280px] rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 flex flex-col items-center text-center border-l-4 border-teal-500 relative overflow-hidden group'
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Hover Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      
      {/* Icon Container with Gradient Background */}
      <div className='mb-5 p-4 bg-gradient-to-br from-teal-100 to-amber-100 rounded-full group-hover:scale-110 transition-transform duration-300'>
        {icon}
      </div>
      
      <h3 className='text-lg font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors'>
        {title}
      </h3>
      
      <p className='text-slate-600 text-sm leading-relaxed'>
        {description}
      </p>

      {/* Accent Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-teal-500 to-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

export default FeatureCard
