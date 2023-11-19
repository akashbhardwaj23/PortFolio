import React from 'react'
import Contact from './Contact'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='py-48 aboutDiv'>
        <div className='max-w-max-w-10xl m-auto w-11/12'>
            <h2 className='mb-36'>
                <span className='aboutsection block text-6xl uppercase tracking-wide text-center mb-14 relative text-black'>About</span>
                <span className='block text-center text-gray-500 text-4xl font-medium max-w-7xl m-auto leading-10'>
                    Here You will find More Information about me. My current Skill mostly in terms of tech
                </span>
            </h2>
            <div className='grid grid-cols-2 gap-40'>
                <div>
                    <h3 className='font-bold text-4xl mb-12'>This is About Me</h3>
                    <div>
                        <p className='text-3xl text-gray-500 max-w-5xl leading-9 mb-4'>
                        I'm a <strong>Frontend Web Developer</strong> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>
                         Projects</strong> section. 
                        </p>
                        <p className='text-3xl text-gray-500 max-w-5xl leading-9 mb-4'>
                        I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href="" className='underline font-bold text-purple-700 my-0 mx-1'>Linkedin</a> where I post useful content related to Web Development and Programming 
                        </p>
                        <p className='last:mb-16 text-3xl text-gray-500 max-w-5xl leading-9'>
                        I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me. 
                        </p>
                    </div>
                   <Link to={'/contact'}><a className='aTagAbout text-white py-6 px-20 text-2xl uppercase tracking-wide inline-block font-bold rounded-md no-underline'>Contact</a></Link>
                </div>
                <div className='skillsBox'>
                    <h3 className='font-bold text-4xl mb-12'> 
                        Skills
                    </h3>
                    <div className='skills flex flex-wrap'>
                        <div className='py-4 px-8 mb-6 mr-6 text-2xl bg-gray-200 rounded-md font-semibold text-gray-500'>HTML</div>
                        <div className='py-4 px-8 mb-6 mr-6 text-2xl bg-gray-200 rounded-md font-semibold text-gray-500'>CSS</div>
                        <div className='py-4 px-8 mb-6 mr-6 text-2xl bg-gray-200 rounded-md font-semibold text-gray-500'>Javascript</div>
                        <div className='py-4 px-8 mb-6 mr-6 text-2xl bg-gray-200 rounded-md font-semibold text-gray-500'>React</div>
                        <div className='py-4 px-8 mb-6 mr-6 text-2xl bg-gray-200 rounded-md font-semibold text-gray-500'>Tailwind css</div>
                        <div className='py-4 px-8 mb-6 mr-6 text-2xl bg-gray-200 rounded-md font-semibold text-gray-500'>Git</div>
                        <div className='py-4 px-8 mb-6 mr-6 text-2xl bg-gray-200 rounded-md font-semibold text-gray-500'>Github</div>
                        <div className='py-4 px-8 mb-6 mr-6 text-2xl bg-gray-200 rounded-md font-semibold text-gray-500'>Java</div>
                        <div className='py-4 px-8 mb-6 mr-6 text-2xl bg-gray-200 rounded-md font-semibold text-gray-500'>Python</div>
                        <div className='py-4 px-8 mb-6 mr-6 text-2xl bg-gray-200 rounded-md font-semibold text-gray-500'>Ethical Hacking</div>
                        <div className='py-4 px-8 mb-6 mr-6 text-2xl bg-gray-200 rounded-md font-semibold text-gray-500'>SQL Basics</div>
                        <div className='py-4 px-8 mb-6 mr-6 text-2xl bg-gray-200 rounded-md font-semibold text-gray-500'>MongoDB</div>
                        <div className='py-4 px-8 mb-6 mr-6 text-2xl bg-gray-200 rounded-md font-semibold text-gray-500'>CLI</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About