import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Values() {
    return (
        <div className='relative w-full min-h-screen overflow-hidden bg-black'>
            <Head>
                <title>RUKI Values</title>
                <meta name="description" content="What we believe" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div className='w-full h-full'>
                <div className='w-full flex items-center flex-col'>
                    <section className='w-full h-screen flex flex-row max-w-7xl pt-[90px]'>
                        <div className="w-[30%] relative flex flex-col items-center justify-center">
                            <div className='font-extrabold text-white text-[50px] w-[70%] leading-[1.1] z-[100] h-[200px]'>
                                Our Core Values
                            </div>
                            <div className='w-[50%] relative flex items-center justify-center'>

                                <img src="/assets/images/puzzle.png" alt="..." className='absolute z-[2] object-cover scale-[2] translate-y-[-50px]' />
                                <div className='absolute bg-black/60 bg-clip-padding backdrop-filter backdrop-blur-2xl w-[400px] h-[500px] z-[1]'></div>
                                <div className='w-[300px] h-[400px] bg-gradient-to-tr from-rukipurple to-rukiblue rounded-full'></div>
                            </div>
                        </div>
                        <div className="w-[70%] flex flex-row relative items-center">
                            <div className="ml-[10%] h-[50%] w-[1px] bg-neutral-900 absolute z-[4] opacity-[50%]"></div>
                            <div className="h-full flex flex-col items-center justify-center pl-[20%] pr-[5%]">
                                <div>
                                    <div className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-rukipurple via-rukiblue to-rukiblue text-xl mt-[5%]'>
                                        Customer Foucused
                                    </div>
                                    <div className='font-normal text-neutral-200 text-md mt-[2%]'>
                                    we prioirtise our customer needs and wants. we do not compromise when it comes to the vision. we believe that through feedback and working together we can bring their ideas to reality.
                                    </div>
                                </div>
                                <div>
                                    <div className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-rukipurple via-rukiblue to-rukiblue text-xl mt-[5%]'>
                                        Attention to Detail
                                    </div>
                                    <div className='font-normal text-neutral-200 text-md mt-[2%]'>
                                    we prioirtise our customer needs and wants. we do not compromise when it comes to the vision. we believe that through feedback and working together we can bring their ideas to reality.
                                    </div>
                                </div>
                                <div>
                                    <div className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-rukipurple via-rukiblue to-rukiblue text-xl mt-[5%]'>
                                        Passion
                                    </div>
                                    <div className='font-normal text-neutral-200 text- mt-[2%]'>
                                    we prioirtise our customer needs and wants. we do not compromise when it comes to the vision. we believe that through feedback and working together we can bring their ideas to reality.
                                    </div>
                                </div>
                                <div>
                                    <div className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-rukipurple via-rukiblue to-rukiblue text-xl mt-[5%]'>
                                        Innovation
                                    </div>
                                    <div className='font-normal text-neutral-200 text-md mt-[2%]'>
                                    we prioirtise our customer needs and wants. we do not compromise when it comes to the vision. we believe that through feedback and working together we can bring their ideas to reality.
                                    </div>
                                </div>
                                <div>
                                    <div className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-rukipurple via-rukiblue to-rukiblue text-xl mt-[5%]'>
                                        Equal Opportunity
                                    </div>
                                    <div className='font-normal text-neutral-200 text-md mt-[2%]'>
                                    we prioirtise our customer needs and wants. we do not compromise when it comes to the vision. we believe that through feedback and working together we can bring their ideas to reality.
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