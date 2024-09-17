/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import React, { useRef } from "react";
import Navbar, { NavBarHeight } from "../../components/navbar";
import Footer from "../../components/footer";
import { FaUnity, FaJava, FaReact } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { SiJavascript, SiSwift } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoIosBulb, IoLogoAndroid, IoLogoJavascript } from "react-icons/io";
import Head from "next/head";
import { ResponsiveRow } from "../../components/responsive_row/responsive_row";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { useThemeChanger } from "../../providers/ThemeChangerProvider";
import { SiteDataService } from "../../config/services/sitedata";
import { SiteData } from "../../types";
import { ThemedLogo } from "../../components/logo";
import { Alignment, Column, Row } from "ruki-react-layouts";
import { GlobalStylesData } from "../../globalStyles";
import { motion } from "framer-motion";
import { CTAButton } from "../../components/cta_button";
import CustomCursor from "../assets/cursor.svg";
import laptopSiteMock from "../../assets/laptop_site_mock_white.png";
import siteMock2 from "../../assets/site_mock2.png";
import siteMock3 from "../../assets/site_mock3.png";
import styles from "../../index.module.css"
import { useMediaQuery } from "../../components/responsive_row/useMediaQuery";
import { Chip, Typography } from "@mui/material";
import { GlowingBorder } from "../../components/glowing_border";
import PerspectiveWrapper from "../../components/perspective_box";
import  SectionA  from "./sectionA";
import SectionB from "./sectionB";
import SectionC from "./SectionC";
import SectionD from "./SectionD";
const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function Home() {
  const alignCenter = { display: 'flex', alignItems: 'center' }

  const parallax = useRef<IParallax>(null!);
  const { updateTheme, themeData } = useThemeChanger();
  const { getSiteData } = SiteDataService();
  const {isMobile} = useMediaQuery();
  const [siteData, setSiteData] = React.useState<SiteData | undefined>(
    undefined
  );
  const gradientVariants = {
    start: {
      background: "linear-gradient(90deg, #010409, #1b1123)",
    },
    end: {
      background: "linear-gradient(90deg, #1b1123, #010409)",
    },
  };
  React.useEffect(() => {
    updateTheme("dark");
    getSiteData().then((data) => {
      setSiteData(data);
    });
  }, []);

  const BuildMobile = () => {
    return  <Parallax
    pages={3.9}
  >
    <ParallaxLayer offset={2} speed={0.25} style={{ backgroundColor: '#f5ffff', }} className="h-full" />
    <ParallaxLayer offset={2.95} speed={0.2} style={{ backgroundColor: '#f5ffff', }} className="h-full" />
    <ParallaxLayer offset={3.75} style={{ backgroundColor: '#f5ffff', }} className="max-h-[150px]">
      <Footer/>
    </ParallaxLayer>
    <ParallaxLayer
      offset={0}
      speed={0}
      factor={3}
      style={{
        backgroundImage: url("stars", true),
        backgroundSize: "cover",
      }}
    />
    <SectionA siteData={siteData}/>
  <ParallaxLayer offset={0.8} speed={0.3} style={{ ...alignCenter, justifyContent: 'flex-start', margin: "0 auto",  maxWidth: themeData.breakpoints.desktop,pointerEvents:"none" }}>
    <SectionB.CaptionA siteData={siteData} />
  </ParallaxLayer> 

  <ParallaxLayer offset={0.998} speed={0.1} className={"justify-end xs:justify-center"} style={{ ...alignCenter }}>
    <SectionB.CaptionB siteData={siteData} />
  </ParallaxLayer>
  <ParallaxLayer offset={0.998} speed={0.15} className={"justify-end xs:justify-center"}  style={{ ...alignCenter}}>
   <SectionB.CaptionC siteData={siteData} />
  </ParallaxLayer>
  <ParallaxLayer offset={0.998} speed={0.15} className={"justify-end xs:justify-center"}  style={{ ...alignCenter}}>
   <SectionB.CaptionE siteData={siteData} />
  </ParallaxLayer>
  <ParallaxLayer offset={0.999} speed={0.15} className={"justify-end xs:justify-center"}  style={{ ...alignCenter}}>
   <SectionB.CaptionF siteData={siteData} />
  </ParallaxLayer>
  <ParallaxLayer offset={1.2} speed={0.2} className={"justify-end xs:justify-center"}  style={{ ...alignCenter }}>
  <SectionB.CaptionD siteData={siteData} />
  </ParallaxLayer>
  <ParallaxLayer offset={1.9} speed={0.2} className={"justify-end xs:justify-center"}  style={{ ...alignCenter }}>
  <SectionC.CaptionA siteData={siteData} />
  </ParallaxLayer>
  <ParallaxLayer offset={2.15} speed={0.2} className={"justify-end xs:justify-center"}  style={{ ...alignCenter }}>
  <SectionC.CaptionB siteData={siteData} />
  </ParallaxLayer>
  <ParallaxLayer offset={2.62} speed={0.2} className={"justify-end xs:justify-center"}  style={{ ...alignCenter }}>
    <SectionD.CaptionA siteData={siteData} />
    </ParallaxLayer>
  <ParallaxLayer offset={2.985} speed={0.1} className={"justify-end xs:justify-center"}  style={{ ...alignCenter }}>
    <SectionD.CaptionB siteData={siteData} />
    </ParallaxLayer>
  </Parallax>
  };

  const BuildDesktop = () => {
    return   <Parallax
    pages={5.2}
  >
    <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#f5ffff', }} className="h-full" />
    <ParallaxLayer offset={3.3} style={{ backgroundColor: '#f5ffff', pointerEvents: 'none'  }} className="h-full" />
    <ParallaxLayer offset={4.2} style={{ backgroundColor: '#f5ffff', pointerEvents: 'none' }} className="h-full" />
    <ParallaxLayer offset={5.05} style={{ backgroundColor: '#f5ffff', }} className="max-h-[150px]">
      <Footer/>
    </ParallaxLayer>
    <ParallaxLayer
      offset={0}
      speed={0}
      factor={3}
      style={{
        backgroundImage: url("stars", true),
        backgroundSize: "cover",
      }}
    />
    <SectionA siteData={siteData}/>
    
    <ParallaxLayer sticky={{ start: 1, end: 2.5 }} style={{ ...alignCenter, justifyContent: 'flex-start', margin: "0 auto",  maxWidth: themeData.breakpoints.desktop,pointerEvents:"none" }}>
      <SectionB.CaptionA siteData={siteData} />
    </ParallaxLayer>

    <ParallaxLayer offset={1.5} speed={1.3} className={"justify-end xs:justify-center"} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
      <SectionB.CaptionB siteData={siteData} />
    </ParallaxLayer>
    <ParallaxLayer offset={1.2} speed={1} className={"justify-end xs:justify-center"}  style={{ ...alignCenter, justifyContent: 'flex-end'}}>
    <SectionB.CaptionC siteData={siteData} />
    </ParallaxLayer>
    <ParallaxLayer offset={1.98} speed={1.8} className={"justify-end xs:justify-center"}  style={{ ...alignCenter,justifyContent: 'flex-end' }}>
    <SectionB.CaptionD siteData={siteData} />
    </ParallaxLayer>
    <ParallaxLayer offset={2} speed={0.5}  className={"justify-end xs:justify-center"}  style={{ ...alignCenter,justifyContent: 'flex-end' }}>
      <SectionB.CaptionF showBackground siteData={siteData} />
    </ParallaxLayer>
    <ParallaxLayer offset={2} speed={0.5}  className={"justify-end xs:justify-center"}  style={{ ...alignCenter,justifyContent: 'flex-end' }}>
      <SectionB.CaptionE siteData={siteData} />
    </ParallaxLayer>
    <ParallaxLayer offset={2.1} speed={0.8} className={"justify-end xs:justify-center"}  style={{ ...alignCenter,justifyContent: 'flex-end' }}>
    <SectionB.CaptionG siteData={siteData} />
    </ParallaxLayer>
   
      

    <ParallaxLayer offset={3.2} speed={0.5} className={"justify-end xs:justify-center"}  style={{ ...alignCenter}}>
      <SectionC.CaptionA siteData={siteData} />
    </ParallaxLayer>
    <ParallaxLayer offset={3.5} speed={0.6} className={"justify-end xs:justify-center"}  style={{ ...alignCenter}}>
      <SectionC.CaptionB siteData={siteData} />
    </ParallaxLayer>
    <ParallaxLayer offset={3.9} speed={0.3} className={"justify-end xs:justify-center"}  style={{ ...alignCenter
    }}>
      <SectionD.CaptionA siteData={siteData} />
    </ParallaxLayer>
    <ParallaxLayer offset={4.05} speed={0.4} className={"justify-end xs:justify-center"}  style={{ ...alignCenter, }}>
      <SectionD.CaptionB siteData={siteData} />
    </ParallaxLayer>

      {/* <ParallaxLayer
        offset={1.1}
        speed={-0.3}
        style={{ pointerEvents: "none" }}
      >
        <img
          src={url("satellite4")}
          style={{ width: "15%", marginLeft: "70%" }}
        />
      </ParallaxLayer> */}
    </Parallax>
  }
  return (
    <>
      <motion.div className={styles.background}
        // initial="start"
        // animate="end"
        // transition={{
        //   duration: 3,      // duration of the animation in seconds
        //   repeat: Infinity, // repeat the animation indefinitely
        //   repeatType: 'reverse', // reverse the animation on repeat
        // }}
      >{
        isMobile ? <BuildMobile /> : <BuildDesktop />
      }
     
      </motion.div>
      <Navbar pageNo={0} />
    </>
  );
}
{
  /* <div className='relative w-full min-h-screen overflow-hidden bg-black'>
      <Head>
        <title>RUKI Home</title>
        <meta name="description" content="Always Growing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar pageNo = {0} />
      <div className='w-full h-full'>
        <div className='w-full flex items-center flex-col'>
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
                <div className='font-bold text-neutral-200 text-xl mt-[5%]'>
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

              <img src="/assets/images/devices.png" alt="..." className='absolute z-[15] object-cover scale-[1.6]' />


              <div className='absolute bg-black/60 bg-clip-padding backdrop-filter backdrop-blur-2xl w-full h-[60%] z-[14]'></div>
              <div className='w-[400px] h-[500px] bg-gradient-to-tr from-rukipurple to-rukiblue rounded-full rotate-90'></div>
            </div>
          </section>

          <section className='w-screen bg-white/[1]'>
            <div className='w-full flex justify-center relative h-[450px]'>

              <div className='absolute bg-white/60 bg-clip-padding backdrop-filter backdrop-blur-2xl w-full h-full z-[14]' />

              <div className='w-full h-full flex justify-center'>
                <div className='w-[500px] h-[400px] bg-gradient-to-tr from-rukipurple to-rukiblue rounded-full mr-[10%]' />
                <div className='w-[300px] h-[300px] bg-gradient-to-tr from-rukipurple to-rukipurple rounded-full' />
              </div>
              <div className='absolute w-full flex flex-col max-w-7xl overflow-hidden py-[80px] z-[15] space-y-10'>
                <div className='font-extrabold text-black text-4xl w-full flex justify-center mix-blend-difference mb-10'>
                  Tools & Technologies
                </div>

                <div className='w-full grid grid-cols-8 gap-2 justify-center'>
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

          <section className='w-full h-[60vh] flex flex-row max-w-7xl my-[5%]'>
            <div className='w-[50%] h-full flex flex-row items-center justify-center'>
              <div className='w-[200px] mr-[80px]'>
                <img src="/assets/images/logov2_white.png" alt="..." className='z-[15] object-cover' />
              </div>
              <div className='w-[1px] h-[80%] bg-white/20 mr-[80px]'></div>
              <div>
                <div className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rukipurple via-rukiblue to-rukiblue text-[60px]'>
                  Always
                </div>
                <div className='font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-rukipurple via-rukiblue to-rukiblue text-[60px]'>
                  Growing
                </div>
              </div>

            </div>
            <div className='w-[50%] h-full relative flex items-center justify-center'>
              <div className='font-normal text-neutral-200 text-xl mt-[5%] w-[80%]'>
                At Ruki, we prioritize both innovation and user experience. Ruki is primarily a development company, offering slick, high-fidelity websites and applications, imaginative and immersive games, and stunning contemporary visuals.
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </div> */
}
