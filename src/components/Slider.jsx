import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'

function Slider() {

    const {state, setState} = useContext(UserContext);

    const handleClick = () => {
        setState(false)
    }
  return (
    <div className={`${state? 'block':'hidden'} relative sm:hidden w-full min-h-full bg-zinc-100 overflow-hidden shadow-sm rounded-md z-[10]`}>
             <div className='relative w-full h-full top-28  text-center z-[1]'>
               <ul className='no-underline'>
                <li className='text-4xl font-bold hover:text-purple-700 px-12 py-10 uppercase text-right cursor-pointer text-gray-700 listItem'><Link to={""}onClick={handleClick}>Home</Link></li>
                <li className='text-4xl font-bold hover:text-purple-700 px-12 py-10 uppercase text-right cursor-pointer text-gray-700 listItem'><Link to={"/about"}>About</Link></li>
                <li className='text-4xl font-bold hover:text-purple-700 px-12 py-10 uppercase text-right  cursor-pointer text-gray-700 listItem'><Link to={"/projects"}>Project</Link></li>
                <li className='text-4xl font-bold hover:text-purple-700 px-12 py-10 uppercase text-right cursor-pointer text-gray-700 listItem'><Link to={"/contact"}>Contact</Link></li>
               </ul>
             </div>
        </div>
  )
}

export default Slider