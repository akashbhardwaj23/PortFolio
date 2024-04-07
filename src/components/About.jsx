import React, { useContext, useState } from 'react'
import { Button } from '../components'
import { Link } from 'react-router-dom'
import ScrollToTop from './ui/ScrollToTop'
import Slider from './ui/Slider'
import UserContext from '../context/UserContext'
import {theme, themeKeys} from "../Theme"

function About() {
    const {themeMode} = useContext(UserContext);
    const { skills } = useContext(UserContext);

  return (
    <div className={`py-48 relative ${themeMode === "light" ? "aboutDiv":"darkAboutDiv"} dark:border-b-2 dark:border-white`}>
        <Slider />
         <ScrollToTop />
        <div className='max-w-max-w-10xl m-auto w-11/12'>
       
            <h2 className='md:mb-36 mb-8'>
                <span className='aboutsection block text-6xl font-bold uppercase tracking-wide text-center mb-14 relative text-black dark:text-white'>About</span>
                <span className='block sm:text-center text-gray-500 sm:text-4xl font-medium sm:max-w-7xl sm:m-auto sm:leading-10 text-3xl dark:text-white'>
                    Here You will find More Information about me. My current Skill mostly.
                </span>
            </h2>
            <div className='grid md:grid-cols-2 md:gap-40 grid-cols-1 gap-32'>
                <div>
                    <h3 className='font-bold text-4xl mb-12 dark:text-white'>This is About Me</h3>
                    <div>
                        <p className='text-3xl text-gray-500 max-w-5xl leading-9 mb-4 dark:text-yellow-50'>
                        I'm a <strong>Frontend Web Developer</strong> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>
                         Projects</strong> section. 
                        </p>
                        <p className='text-3xl text-gray-500 max-w-5xl leading-9 mb-4 dark:text-yellow-50'>
                        I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href="" className='underline font-bold text-indigo-600 my-0 mx-1'>Linkedin</a> where I post useful content related to Web Development and Programming 
                        </p>
                        <p className='last:mb-16 text-3xl text-gray-500 max-w-5xl leading-9 dark:text-yellow-50'>
                        I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me. 
                        </p>
                    </div>
                   {/* <Link to={'/contact'}><a className='aTagAbout text-white py-6 px-20 text-2xl uppercase tracking-wide inline-block font-bold rounded-md no-underline'>Contact</a></Link> */}
                   <Link to={'/contact'}><Button children= {'Contact'}/> </Link>
                </div>
                <div className='skillsBox'>
                    <h3 className='font-bold text-4xl mb-12 dark:text-white'> 
                        Skills
                    </h3>
                    <div className='skills flex flex-wrap'>
                        {skills.map((skill, index) => (
                            <div className={`skill py-6 px-8 mb-6 mr-6 text-3xl flex justify-center items-center ${theme[themeKeys[index]]} rounded-md font-semibold dark:text-[#FEE2E2] hover:cursor-pointer`}>
                                <img src={skill.img} alt="img" className='mr-2 h-8 w-8' />
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About