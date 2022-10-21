import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Team() {
    return (
        <div className='relative w-full min-h-screen overflow-hidden bg-black'>
            <Head>
                <title>RUKI Team</title>
                <meta name="description" content="What we are made of" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div className='w-full h-full'>
                <div className='w-full flex items-center flex-col'>
                    <section className='w-full h-screen flex flex-col max-w-7xl items-center justify-center'>
                        <div className='font-extrabold text-white text-4xl w-full flex justify-center mix-blend-difference mb-10'>
                            Meet The Founders
                        </div>
                        <div className="w-full h-[60%] flex flex-row items-center justify-center space-x-4">

                            <div className="bg-white h-[480px] w-[325px] rounded-lg px-4 pt-8 pb-8 flex flex-col items-center shadow-2xl shadow-white/30 relative overflow-hidden">
                                <div className='absolute w-full h-full flex justify-center z-[3]'>
                                    <div className='w-[500px] h-[300px] bg-gradient-to-tr from-rukipurple to-rukiblue rounded-full mr-[30%] rotate-90 translate-x-[100px]' />
                                    <div className='w-[300px] h-[200px] bg-gradient-to-tr from-rukipurple to-rukipurple rounded-full rotate-90 translate-y-[150px] translate-x-[100px]' />
                                </div>
                                <div className='absolute bg-white/75 bg-clip-padding backdrop-filter backdrop-blur-2xl w-full h-full z-[4]' />
                                <div className="w-full h-full flex flex-col items-center absolute z-[5]">
                                    <div className="rounded-full h-[150px] w-[150px] bg-white overflow-hidden shadow-inner">
                                        <img src="/assets/images/ollie.jpg" alt="..." className=" object-cover" />
                                    </div>
                                    <div className="w-full flex flex-col items-center space-y-4 px-6 ">
                                        <div className=" flex flex-col space-y-2 items-center">
                                            <div className="font-bold text-transparent bg-clip-text bg-gradient-to-l from-rukipurple via-rukipurple to-rukiblue text-2xl mt-6">
                                                Olamide Ogunlade
                                            </div>
                                            <div className="font-semibold text-neutral-500 text-[12px] ">
                                                Web • Mobile • Design • Game Development
                                            </div>
                                        </div>
                                        <div className=" flex flex-col space-y-2 mt-[250px]">
                                            <div className="w-full font-semibold text-neutral-900 text-md">
                                                {"I'm Ollie, the creator of RUKI. I am a driven individual who never hesitates to take on difficulties."}
                                            </div>
                                        </div>
                                        <div className=" flex flex-col space-y-4 w-full items-center translate-y-[50px]">
                                            <div className="h-[1px] w-full bg-neutral-300">

                                            </div>
                                            <a target="_blank" rel="noreferrer" href="/https://www.linkedin.com/in/olamide-ogunlade-080816187/">
                                                <div className="font-bold text-neutral-700 text-md flex flex-row items-center hover:scale-[1.1] group hover:text-rukipurple cursor-pointer duration-[400ms]">
                                                    <FaLinkedin className="mr-1 h-[22px] w-[22px] text-[#0274b3]" />
                                                    LinkedIn
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white h-[480px] w-[325px] rounded-lg px-4 pt-8 pb-8 flex flex-col items-center shadow-2xl shadow-white/30 relative overflow-hidden">
                                <div className='absolute w-full h-full flex justify-center z-[3]'>
                                    <div className='w-[500px] h-[300px] bg-gradient-to-tr from-rukipurple to-rukiblue rounded-full mr-[30%] rotate-90 translate-y-[50px]' />
                                    <div className='w-[300px] h-[200px] bg-gradient-to-tr from-rukipurple to-rukipurple rounded-full rotate-90 ' />
                                </div>
                                <div className='absolute bg-white/75 bg-clip-padding backdrop-filter backdrop-blur-2xl w-full h-full z-[4]' />

                                <div className="w-full h-full flex flex-col items-center absolute z-[5]">
                                    <div className="rounded-full h-[150px] w-[150px] bg-white overflow-hidden shadow-inner">
                                        <img src="/assets/images/gabriele.jpg" alt="..." className=" object-cover" />
                                    </div>
                                    <div className="w-full flex flex-col items-center space-y-4 px-6 ">
                                        <div className=" flex flex-col space-y-2 items-center">
                                            <div className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-rukipurple via-rukipurple to-rukiblue text-2xl mt-6">
                                                Gabriele Akintunde
                                            </div>
                                            <div className="font-semibold text-neutral-500 text-[12px] ">
                                                Web • Mobile • Game Development
                                            </div>
                                        </div>
                                        <div className=" flex flex-col space-y-2 mt-[250px]">
                                            <div className="w-full font-semibold text-neutral-900 text-md">
                                                {"Hey, I'm Gabriele, and I helped found RUKI. I am a tenacious individual who delights in trying new things and developing new abilities."}
                                            </div>

                                        </div>
                                        <div className=" flex flex-col space-y-4 w-full items-center translate-y-[25px]">
                                            <div className="h-[1px] w-full bg-neutral-300">

                                            </div>
                                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gabriele-akintunde-247b58173/">
                                                <div className="font-bold text-neutral-700 text-md flex flex-row items-center hover:scale-[1.1] group hover:text-rukipurple cursor-pointer duration-[400ms]">
                                                    <FaLinkedin className="mr-1 h-[22px] w-[22px] text-[#0274b3]" />
                                                    LinkedIn
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white h-[480px] w-[325px] rounded-lg px-4 pt-8 pb-8 flex flex-col items-center shadow-2xl shadow-white/30 relative overflow-hidden">
                                <div className='absolute w-full h-full flex justify-center z-[3]'>
                                    <div className='w-[500px] h-[300px] bg-gradient-to-tr from-rukipurple to-rukiblue rounded-full mr-[30%] rotate-90 translate-x-[260px]' />
                                    <div className='w-[300px] h-[200px] bg-gradient-to-tr from-rukipurple to-rukipurple rounded-full rotate-90 translate-x-[-300px]' />
                                </div>
                                <div className='absolute bg-white/75 bg-clip-padding backdrop-filter backdrop-blur-2xl w-full h-full z-[4]' />
                                <div className="w-full h-full flex flex-col items-center absolute z-[5]">
                                    <div className="rounded-full h-[150px] w-[150px] bg-white overflow-hidden shadow-inner">
                                        <img src="/assets/images/vanco.jpg" alt="..." className=" object-cover scale-[1.2]" />
                                    </div>
                                    <div className="w-full flex flex-col items-center space-y-4 px-6">
                                        <div className=" flex flex-col space-y-2 items-center">
                                            <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-rukipurple via-rukipurple to-rukiblue text-2xl mt-4">
                                                Vainqueur K. Kayombo
                                            </div>
                                            <div className="font-semibold text-neutral-500 text-[12px] ">
                                                Web • Mobile • UI • UX
                                            </div>
                                        </div>
                                        <div className=" flex flex-col space-y-2 mt-[250px]">
                                            <div className="w-full font-semibold text-neutral-900 text-md">
                                                {"I'm a Vainqueur, one of RUKI's founders, and a deeply passionate person. Additionally, I've delivered pixel-perfect software experiences in fast-paced industries."}
                                            </div>

                                        </div>
                                        <div className=" flex flex-col space-y-4 w-full items-center translate-y-[10px]">
                                            <div className="h-[1px] w-full bg-neutral-300">

                                            </div>
                                            <a target="_blank" rel="noreferrer" href="www.linkedin.com/in/vainqueur">
                                                <div className="font-bold text-neutral-700 text-md flex flex-row items-center hover:scale-[1.1] group hover:text-rukipurple cursor-pointer duration-[400ms]">
                                                    <FaLinkedin className="mr-1 h-[22px] w-[22px] text-[#0274b3]" />
                                                    LinkedIn
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}