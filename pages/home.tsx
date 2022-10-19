import Link from 'next/link'
import React from 'react'
import Navbar from '../components/navbar'
import { FaUnity, FaJava, FaReact } from 'react-icons/fa'
import { RiFlutterFill } from 'react-icons/ri'
import { SiJavascript, SiSwift } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { IoLogoAndroid, IoLogoJavascript } from 'react-icons/io'

export default function Home() {
  return (
    <div className='relative w-full min-h-screen overflow-hidden bg-black'>
      <Navbar />
      <div className='w-full h-full'>
        <div className='w-full h-[200vh] flex items-center flex-col'>
          <section className='w-full h-full flex flex-row max-w-7xl'>
            <div className='w-[50%] h-screen flex flex-col items-center justify-center'>
              <div className='w-[100%]'>
                <div className='font-extrabold text-white text-[60px] w-[70%] leading-[1.1]'>
                  We Build
                  Beautiful,
                  High Fidelity
                </div>
                <div className='font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-rukipurple via-rukiblue to-rukiblue text-[60px] leading-[1.1]'>
                  Web & Mobile Applications
                </div>
                <div className='font-bold text-white text-xl mt-[5%]'>
                  Software Design & Development
                </div>
                <div className='mt-[6%]'>
                  <Link href="/contact">
                    <div className='w-[165px] outline outline-1 outline-neutral-700 cursor-pointer transition-all duration-[250ms] hover:animate-none font-bold bg-black text-transparent bg-clip-text bg-gradient-to-tr from-rukipurple via-rukiblue to-rukiblue hover:brightness-150 hover:scale-[1.05] px-7 py-3 rounded-lg text-[18px] select-none'>
                      Get In Touch
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className='w-[50%] h-screen relative flex items-center justify-center'>

              <img src="/assets/images/devices.png" alt="..." className='absolute z-[15] object-cover scale-[1.4]' />


              <div className='absolute bg-black/60 bg-clip-padding backdrop-filter backdrop-blur-2xl w-full h-[60%] z-[14]'></div>
              <div className='w-[400px] h-[500px] bg-gradient-to-tr from-rukipurple to-rukiblue rounded-full rotate-90'></div>
            </div>
          </section>

          <section className='mb-[25%] w-screen bg-white/[0.1] translate-y-[-20%]'>
            <div className='w-full flex justify-center relative h-[350px]'>
              <div className='absolute bg-white/70 bg-clip-padding backdrop-filter backdrop-blur-2xl w-full h-full z-[14]' />
              <div className='w-full h-full flex justify-center'>
                <div className='w-[500px] h-[300px] bg-gradient-to-tr from-rukipurple to-rukiblue rounded-full mr-[10%]' />
                <div className='w-[300px] h-[200px] bg-gradient-to-tr from-rukipurple to-rukipurple rounded-full' />
              </div>
              <div className='absolute w-full flex flex-col max-w-7xl overflow-hidden py-[40px] z-[15] space-y-10'>
                <div className='font-extrabold text-black text-4xl w-full flex justify-center mix-blend-difference mb-10'>
                  Tools & Technologies
                </div>

                <div className='w-full flex flex-row space-x-4 justify-center'>
                  <div className='w-[100px] h-[100px] bg-black rounded-md shadow-md p-6'>
                    <FaUnity className='w-full h-full text-white' />
                  </div>
                  <div className='w-[100px] h-[100px] bg-black rounded-md shadow-md p-6'>
                    <FaJava className='w-full h-full text-white' />
                  </div>
                  <div className='w-[100px] h-[100px] bg-black rounded-md shadow-md p-6'>
                    <FaReact className='w-full h-full text-white' />
                  </div>
                  <div className='w-[100px] h-[100px] bg-black rounded-md shadow-md p-6'>
                    <RiFlutterFill className='w-full h-full text-white' />
                  </div>
                  <div className='w-[100px] h-[100px] bg-black rounded-md shadow-md p-6'>
                    <IoLogoJavascript className='w-full h-full text-white' />
                  </div>
                  <div className='w-[100px] h-[100px] bg-black rounded-md shadow-md p-6'>
                    <SiSwift className='w-full h-full text-white' />
                  </div>
                  <div className='w-[100px] h-[100px] bg-black rounded-md shadow-md p-6'>
                    <TbBrandNextjs className='w-full h-full text-white' />
                  </div>
                  <div className='w-[100px] h-[100px] bg-black rounded-md shadow-md p-6'>
                    <IoLogoAndroid className='w-full h-full text-white' />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  )
}
