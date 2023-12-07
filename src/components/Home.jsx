import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import Slider from './Slider'


function Home() {

    

  return (
    <div className='homeDiv text-white bg-center h-screen min-h-min-h-2 max-h-max relative'>

        <Slider />
        <div className='homeDiv2 absolute top-1/2 left-1/2 max-w-4.5xl w-11/12'>
            <h1 className='heading text-8xl uppercase tracking-wider text-center text-gray-900 font-extrabold'>Hey, Akash This Side</h1>
            <div className='mt-12 mx-auto mb-0 max-w-7xl'>
                <p className='primaryText text-gray-900 text-4xl text-center w-full leading-relaxed'>A FrontEnd Web Developer building the Frontend and Backend of Websites that lead to a overall success</p>
            </div>

            <div className='mt-20 text-center'>
                <Link to={'/projects'}><Button children={'Projects'}/></Link>
            </div>
        </div>

        <div className='sidebar absolute top-1/2 bg-white dark:bg-gray-700 p-10'>
            <div className='w-20'>
                <a href="" target='_blank' className='sidebarA w-full block p-4 rounded-md no-underline'>
                    <img src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg" alt="" className='w-full'/>
                </a>
            </div>
            <div className='w-20'>
                <a href="" target='_blank' className='sidebarA w-full block p-4 rounded-md no-underline'>
                    <img src="https://d33wubrfki0l68.cloudfront.net/ba3ef9fd9d500c55ba265adae6087ba71e05f5d9/d0067/assets/svg/twitter-dark.svg" alt="" className='w-full' />
                </a>
            </div>
            <div className='w-20'>
                <a href="" target='_blank' className='sidebarA w-full block p-4 rounded-md no-underline'>
                    <img src="https://d33wubrfki0l68.cloudfront.net/7c95be3350552a5e9f2fc47f1bdbac118ea4dcee/f7a5e/assets/svg/yt-dark.svg" alt="" className='w-full' />
                </a>
            </div>
            <div className='w-20'>
                <a href="https://github.com/akash23-ai" target='_blank' className='sidebarA w-full block p-4 rounded-md no-underline'>
                    <img src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg" alt="" className='w-full' />
                </a>
            </div>
        </div>

        <div className='mouseContainer'>
            <div className='mouse'></div>
        </div>
    </div>
  )
}

export default Home