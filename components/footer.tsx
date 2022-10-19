export default function Footer() {
    return (
        <div className="w-full h-[25vh] bg-white relative overflow-hidden mt-[5%]">
            <div className='h-[1px] bg-neutral-700 w-full' />
            <div className='absolute bg-white/60 bg-clip-padding backdrop-filter backdrop-blur-2xl w-full h-full z-[4]' />

            <div className='absolute w-full h-full flex justify-center z-[3]'>
                <div className='w-[500px] h-[300px] bg-gradient-to-tr from-rukipurple to-rukiblue rounded-full mr-[30%] rotate-90' />
                <div className='w-[300px] h-[200px] bg-gradient-to-tr from-rukipurple to-rukipurple rounded-full rotate-90' />
            </div>

            <div className="w-full flex justify-center items-center h-[25vh]">
                <div className="absolute flex flex-row max-w-7xl h-[90%] z-[5]">
                    {/* <div className='font-semibold text-neutral-800 text-xl'>
                        At Ruki, we prioritize both innovation and user experience. Ruki is primarily a development company, offering slick, high-fidelity websites and applications, imaginative and immersive games, and stunning contemporary visuals.
                    </div> */}
                    <div className="w-[50vw] h-full flex justify-center items-center">
                        <div className="mt-auto rounded-lg flex mr-auto">
                            <div className='w-[80px] '>
                                <img src="/assets/images/logoV2_full.png" alt="..." className='z-[15] object-cover' />
                            </div>
                        </div>
                    </div>
                    <div className="w-[50vw] h-full flex justify-end items-center">

                        <div className="text-black font-bold mt-auto mb-[11.5px]">© 2022 RUKI, Always Growing ©</div>
                    </div>
                </div>
            </div>
        </div>)
}