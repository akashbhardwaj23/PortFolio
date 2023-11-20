import React from 'react'

function Button({children, isContact = false}) {
  return (
    <button className={`${isContact? "w-full": "w-4/12"} py-8 px-16 text-2xl bg-purple-700 text-white uppercase tracking-wide font-bold rounded-md `}> 
        {children} 
    </button>
  )
}

export default Button