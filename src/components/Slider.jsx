import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'

function Slider() {

    const {state} = useContext(UserContext) 
  return (
    <div className={`${state? 'flex':'hidden'} relative sm:hidden w-full min-h-full bg-white overflow-hidden shadow-sm rounded-md  z-[10]`}>
             <div className='relative w-full h-full top-32  text-center z-[1]'>
               <ul className='no-underline'>
                <li className='text-4xl font-bold hover:text-purple-700 px-12 py-10 uppercase text-right cursor-pointer text-gray-600 listItem'><Link to={""}>Home</Link></li>
                <li className='text-4xl font-bold hover:text-purple-700 px-12 py-10 uppercase text-right cursor-pointer text-gray-600 listItem'><Link to={"/about"}>About</Link></li>
                <li className='text-4xl font-bold hover:text-purple-700 px-12 py-10 uppercase text-right  cursor-pointer text-gray-600 listItem'><Link to={"/projects"}>Project</Link></li>
                <li className='text-4xl font-bold hover:text-purple-700 px-12 py-10 uppercase text-right cursor-pointer text-gray-600 listItem'><Link to={"/contact"}>Contact</Link></li>
               </ul>
             </div>
        </div>
  )
}

export default Slider