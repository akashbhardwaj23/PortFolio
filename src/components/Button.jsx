import React from 'react'

function Button({children}) {
  return (
    <button className='w-4/12 py-8 px-16 text-2xl bg-purple-700 text-white uppercase tracking-wide inline-block font-bold rounded-md'> 
        {children} 
    </button>
  )
}

export default Button