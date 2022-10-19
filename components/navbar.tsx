import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaRocket, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import Link from 'next/link';
import { RiTeamFill } from 'react-icons/ri';



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='fixed z-[999]'>
      <div className='flex justify-center'>
        <div onClick={handleNavMenu} className={`md:hidden w-[95%] max-w-9xl fixed z-[998] ${(isOpen) ? "h-[99vh]" : ""} `}>
          <div className={`relative backdrop-blur-lg bg-black/70 ml-auto pointer-events-auto pt-2 pb-2 px-2 space-y-2 flex-col transition-all duration-[700ms] outline outline-1 outline-neutral-700 w-[350px] ${(isOpen) ? "translate-y-[100px] rounded-md" : "translate-y-[-50px] opacity-[-500%]"}`}>
            <Link href="/team">
              <div className='w-full group h-[50px] bg-white/10 rounded-sm flex justify-center items-center cursor-pointer flex-row gap-4'>
                <RiTeamFill className='cursor-pointer w-8 h-8 text-neutral-100 hover:opacity-100 opacity-80 hover:text-spacepink active:text-spacepurple text-base font-medium select-none'>
                </RiTeamFill>
                <div className='hover:sclae-[1.05] font-semibold '>
                  Our Team
                </div>
              </div>
            </Link>
            <div className='w-full group h-[50px] bg-white/10 rounded-sm flex justify-center items-center cursor-pointer'>
              <a href="mailto:vainqueurkk@gmail.com" className='flex flex-row gap-4 items-center justify-center'>
                <MdEmail className='cursor-pointer w-8 h-8 text-neutral-100 hover:opacity-100 opacity-80 hover:text-spacepink active:text-spacepurple text-base font-medium select-none'>
                </MdEmail>
                <div className='font-bold text-neutral-100 text-sm'>
                  Contact Us
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='fixed z-[999] top-0 left-0 right-0 flex justify-center bg-black/60 bg-clip-padding backdrop-filter backdrop-blur-lg flex-col'>
        <div className=' h-[90px] w-full flex justify-center'>
          <div className='flex flex-row items-center h-[90px] max-w-7xl w-[80%] opacity-100'>
            <div className='flex flex-row items-center group hover:scale-[1.2] transition-all duration-[200ms] cursor-pointer'>
              <Link href="/home">
                <img src="/assets/images/logoV2_full_white.png" alt="logo" className='h-[50px]' />
              </Link>
            </div>
            <div className='flex flex-row h-full'>
              <ul className='hidden h-full md:flex space-x-[2px]'>
                <Link href="/team">
                  <li className='ml-12 group cursor-pointer w-[120px] h-full hover:opacity-100 opacity-80  hover:text-spacepink active:text-white text-base font-normal select-none flex justify-center items-center'>
                    <div className='px-8 py-3 rounded-md group-hover:bg-neutral-900 font-bold group-hover:outline group-hover:outline-1 group-hover:outline-neutral-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-tr group-hover:from-rukipurple group-hover:via-rukiblue group-hover:to-rukiblue'>
                      Team
                    </div>
                  </li>
                </Link>
                <Link href="/values">
                  <li className='group cursor-pointer w-[120px] h-full hover:opacity-100 opacity-80  hover:text-spacepink active:text-white text-base font-normal select-none flex justify-center items-center'>
                    <div className='px-8 py-3 rounded-md group-hover:bg-neutral-900 font-bold group-hover:outline group-hover:outline-1 group-hover:outline-neutral-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-rukipurple group-hover:via-rukiblue group-hover:to-rukipurple'>
                      Values
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
            <div className='hidden ml-auto h-full md:flex items-center flex-row'>
              <div className='h-full flex items-center justify-center'>
                <Link href="/contact">
                  <div className='w-[165px] outline outline-1 outline-neutral-700 cursor-pointer transition-all duration-[250ms] hover:animate-none font-bold bg-black hover:brightness-150 hover:scale-[1.05] px-7 py-3 rounded-lg text-[18px] select-none'>
                    <div className='w-full h-full flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-tr from-rukipurple via-rukiblue to-rukiblue'>
                      Get In Touch
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div onClick={handleNavMenu} className='md:hidden ml-auto flex items-center justify-center'>
              <GiHamburgerMenu className='w-[25px] h-[25px] text-white hover:scale-110 cursor-pointer' />
            </div>

          </div>
        </div>
        <div className='h-[1px] bg-neutral-700 w-full'>

        </div>

      </div>
    </div>
  )
}