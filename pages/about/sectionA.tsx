import {motion} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Column } from "ruki-react-layouts";
import { useMediaQuery } from "../../components/responsive_row/useMediaQuery";
import { SiteData } from "../../types";
import PerspectiveWrapper from "../../components/perspective_box";
import { GlowingBorder } from "../../components/glowing_border";
import { FaLinkedin } from "react-icons/fa";
import { useThemeChanger } from "../../providers/ThemeChangerProvider";
import { exit } from "process";
const SectionA = () => {
    return <></>
}

const CaptionA = () => {
    const { ref, inView } = useInView({
        triggerOnce: false
    });

    const {isDesktop} = useMediaQuery();
    
    return <>
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
                width: !isDesktop ? "100%" : "60%",
            }}
        className="p-10">
            <Column>
            <div className="font-bold text-black text-2xl xs:text-[60px] leading-[1.1] text-left">
               Meet our team of <span className="text-rukipurple italic" style={{fontFamily: "Courgette"}}>creators</span>, <span className="text-rukiblue italic"  style={{fontFamily: "Courgette"}}>innovators</span> and Exceptional <span className="bg-clip-text bg-gradient-to-tr from-rukipurple via-rukiblue to-rukiblue italic"  style={{fontFamily: "Courgette"}}>problem solvers</span>
            </div>
            <div className="text-left text-gray-600 text-xs sm:text-xl mt-8">
                We are Ruki, and each and everyone of us embody our mantra of <span className="italic font-bold" style={{fontFamily: "Courgette"}}>Always growing</span><br/> A vow to always <span className="italic" style={{fontFamily: "Courgette"}}>learn, adapt and grow</span> with this ever changing world.
                At Ruki we operate as a well oiled machine, each part working in harmony with the other to create the best possible outcome for our partners and customers. <span className="italic" style={{fontFamily: "Courgette"}}> Follow our journey as we grow and evolve together. </span>
            </div>
            </Column>
        </motion.div>
    </>
}
const CaptionB = ({siteData}: {siteData: SiteData}) => {
    const { ref, inView } = useInView({
        triggerOnce: false
    });
    const {themeData} = useThemeChanger();
    const gridVariant = {
        hidden: { opacity: 0 },
        show: inView ? {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }:{},
        exit:{
            opacity: 0,
            transition: {
                staggerChildren: 0.1
            }
        }
    }
    const itemVariant = {
        hidden: { opacity: 0, y: 20 },
        show:  inView ? { opacity: 1, y: 0 } : {},
        exit: { opacity: 0, y: 20 }
    }
    return <>
        <motion.div 
         variants={gridVariant}
            initial="hidden"
            animate="show"
            exit="exit"
        className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-4 p-10 md:mt-10" ref={ref}>
           {
                siteData?.team?.map((member, index) => {
                     return <motion.div 
                            variants={itemVariant}
                            key={index}
                           >
                          <PerspectiveWrapper constrain={250}>
                            <GlowingBorder borderColor={themeData.colors.primary} borderRadius="8px">
                                <Column  className="bg-white  min-h-[500px] w-[325px] rounded-lg shadow-lg  shadow-white/30 relative overflow-hidden" style={{border: "1px solid #0a0a0a0f"}}>
                                    <div className='absolute w-full h-full flex justify-center z-[3]'>
                                <div className='w-[400px] h-[300px] bg-gradient-to-tr from-rukipurple to-rukiblue rounded-full mr-[30%] rotate-90 translate-y-[50px]' />
                                <div className='w-[300px] h-[200px] bg-gradient-to-tr from-rukipurple to-rukipurple rounded-full rotate-90 ' />
                                </div>
                                <div className='absolute bg-white/75 bg-clip-padding backdrop-filter backdrop-blur-2xl w-full h-full z-[4]' />
                                <div className="w-full h-full flex flex-col items-center absolute z-[5] py-4">
                                <div className="rounded-full h-[150px] w-[150px] bg-white overflow-hidden shadow-inner border-gray-500">
                                        <img src={member.img} alt="..." className=" object-cover" />
                                    </div>  <div className="w-full flex flex-col items-center space-y-4 px-6 ">
                                        <div className=" flex flex-col space-y-2 items-center">
                                            <div className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-rukipurple via-rukipurple to-rukiblue text-2xl mt-6">
                                               {member.name}
                                            </div>
                                            <div className="font-semibold text-neutral-500 text-[12px] ">
                                                {member.role}
                                            </div>
                                        </div>
                                        <div className=" flex flex-col space-y-2 mt-[250px]">
                                            <div className="w-full font-semibold text-neutral-900 text-md">
                                                {member.description}
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
                                </Column>
                            </GlowingBorder>
                          </PerspectiveWrapper>
                     </motion.div>
                })
           }
        </motion.div>
    </>
}
SectionA.CaptionA = CaptionA;
SectionA.CaptionB = CaptionB;
export default SectionA