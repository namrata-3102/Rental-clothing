import React from 'react'

function InputBox({ type = "text", value, onChange, placeholder, className }) {
  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      className={`
        w-full px-4 py-2 mt-4 
        border border-gray-300 rounded-xl 
        shadow-sm text-gray-800 placeholder-gray-400 
        focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500
        transition-all duration-200
        ${className}
      `}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default InputBox
