import React from 'react'

function Heading({heading,className}) {
  return (
    <div>
        <h1 className={`text-center text-4xl my-5 font-bold text-violet-700 ${className}`}>
        {heading}</h1>   
    </div>
  );
}

export default Heading
