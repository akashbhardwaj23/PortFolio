import React from 'react'

function Component({name, isSlider=false}) {
 
  if(isSlider) return <a href="" className='border-t border-solid border-white'></a>


  return <a className='py-9 px-12 inline-block text-2xl text-gray-600 dark:text-white uppercase tracking-wide font-bold transition-colors duration-300 ease-linear delay-0 hover:text-purple-600'>{name}</a>
}

export default Component