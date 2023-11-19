import React from 'react'
import Input from './Input'
import Button from './Button'

function Contact() {

    // top: calc(100% + 1.5rem); remember
  return (
    <div className='bg-black bg-repeat bg-scroll bg-origin-padding bg-clip-border bg-cover bg-center py-48 contactDiv'>
        <div className='max-w-max-w-10xl m-auto w-11/12'>
                <h2 className='mb-36'>
                    <span className='after:content-none after:absolute after:h-1 after:w-12 after:left-1/2 after:-translate-x-1/2 after:rounded topSpan  after:bg-purple-600 text-gray-800 font-extrabold block text-7xl uppercase tracking-wide text-center mb-14 relative'>
                        Contact

                    </span>
                    <span className='text-gray-700 block text-center text-4xl font-medium max-w-7xl m-auto leading-loose'>
                            Feel free to Contact me by submitting the form below and i will get back to you as soon as possible
                    </span>
                </h2>

                <div className=' shadow-sm text-white p-16 max-w-7xl text-right w-11/12 rounded-md mt-20 mr-auto mb-0 ml-auto  border'>
                    <form action="#" method='post'>
                        <input type="hidden" value={"form"} />
                        <Input name= {'Name'} type={'text'} placeholder={'Enter Your Name'}/>
                        <Input name= {'Email'} type={'email'} placeholder={'Enter Your Email'}/>
                        <Input name= {'Message'} type={'text'} placeholder={'Enter Your Message'}/>
                        <Button children = {'Submit'}/>
                    </form>
                </div>
        </div>
    </div>
  )
}

export default Contact