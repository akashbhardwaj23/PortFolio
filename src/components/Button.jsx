import React from 'react'

function Button({children, isContact = false}) {
  return (
    <button className={`btn ${isContact? "w-full": "md:w-2/4 w-auto"} py-8 px-16 text-2xl bg-indigo-600 text-white uppercase tracking-wide inline-block font-bold rounded-md text-center scale-95 `}> 
        {children} 
    </button>
  )
}



export default Button