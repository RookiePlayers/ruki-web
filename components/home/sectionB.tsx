import { ParallaxLayer } from "@react-spring/parallax";
import { useMediaQuery } from "../responsive_row/useMediaQuery";
import { SiteData } from "../../types";
import {motion} from "framer-motion";
import { CTAButton } from "../cta_button";
import styles from "../../index.module.css"
import laptopSiteMock from "../../assets/laptop_site_mock_white.png";
import siteMock2 from "../../assets/site_mock2.png";
import siteMock3 from "../../assets/site_mock3.png";
import mob_main_vid from "../../assets/mob_main_vid.gif";
import mob_1 from "../../assets/mob_1.png";
import mob_2 from "../../assets/mob_2.png";
import mob_3 from "../../assets/mob_3.png";
import PerspectiveWrapper from "../perspective_box";
import { GlowingBorder } from "../glowing_border";
import { Alignment, Column, Row } from "ruki-react-layouts";
import { IoIosBulb } from "react-icons/io";
import { Chip, Typography } from "@mui/material";
import { useThemeChanger } from "../../providers/ThemeChangerProvider";
import { useInView } from "react-intersection-observer";

/**
 * 
 * There exists a bug with PallaxSticky that causes the sticky element to disappear on scroll due to <></>, 
 * so for now this component is to be created within <Parallax><Parallax/>
 * [https://github.com/pmndrs/react-spring/issues/2052]
 */

const SectionB = ({siteData}: {siteData?: SiteData}) => {
    const {isMobile} = useMediaQuery()
    const { currentTheme, themeData } = useThemeChanger();

    return (
      <>
        <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start', margin: "0 auto",  maxWidth: themeData.breakpoints.desktop,pointerEvents:"none" }}>
        <div className="w-[50%] h-screen flex flex-col items-center justify-center p-5">
            <div className="w-[100%]">
              <div className="font-extrabold text-white text-[60px] w-[70%] leading-[1.1]">
                We Build Beautiful, High Fidelity
              </div>
              <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-rukipurple via-rukiblue to-rukiblue text-[60px] leading-[1.1]">
                Web & Mobile Applications
              </div>
              <div className="font-bold text-neutral-200 text-xl mt-[5%]">
                Software Design & Development
              </div>
              <motion.div
                style={{ }}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="font-semibold text-neutral-300 text-[18px] mt-[5%] w-[65%] text-center"
              >
                <CTAButton
                  text="Get In Touch"
                  onClick={() => {}}
                  size="large"
                  style={{ borderRadius: 8, pointerEvents: "all" }}
                />
              </motion.div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1.3} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}> 
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            src={laptopSiteMock.src}
            className="absolute z-[15] object-contain scale-[1.0]"
            style={{ width: 400, height: 400 }}
          />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.2} speed={1} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <Row alignment={Alignment.center} crossAlignment={Alignment.center} style={{width:"35%", marginRight: "10%", marginTop: "10%"}}>
          <Row alignment={Alignment.spaceBetween}  style={{width:550, marginRight: "5%"}}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} style={{
            width: 250, height: 190, borderRadius: 12, border: '1px solid #fff', overflow: 'hidden', marginRight: 20
          }}>
          <motion.img alt="site mock"
            src={siteMock2.src}
            width={"100%"}
            height={"100%"}
            style={{  objectFit: 'cover', width: '100%', height: '100%',borderRadius: 12, transform: "scale(1.2)"}}
          />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} style={{
            width: 250, height: 190, borderRadius: 12, border: '1px solid #fff', overflow: 'hidden' 
          }}>
          <motion.img alt="site mock 3"
            src={siteMock3.src}
            width={"100%"}
            height={"100%"}
            style={{  objectFit: 'cover', width: '100%', height: '100%',borderRadius: 12,transform: "scale(1.2)"}}
          />
          </motion.div>
          </Row>
          </Row>
        </ParallaxLayer>
        <ParallaxLayer offset={1.98} speed={1.8} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
        <motion.div whileHover={
          {
            scale: 1.2,
            cursor: "pointer",
            transition: {
              duration: 0.4,
              type: "tween",
          }}
        } className={`${styles.card}  ${styles.parallax}`}> 
        
        <PerspectiveWrapper constrain={85}>
          <GlowingBorder borderRadius={"12px"} borderWidth={1} borderOpacity={1} borderColor="#fff">
          <Row  crossAlignment={Alignment.top} style={{
            background: "linear-gradient(-5deg, #31cbc9cc -10%, #6a00f4cc  80%)",
            padding: 20, borderRadius: 12
          }}>
            <IoIosBulb size={80} style={{marginTop: -20, marginLeft: 5}} color="white" />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              <Column crossAlignment={Alignment.center} alignment={Alignment.center}>
              <Typography>At Ruki we create imersive websites that make the best use of the latest technologies. Our developers and designers curate the best user experience for your customers. </Typography>
              <Row alignment={Alignment.spaceAround} style={{width:"65%", flexWrap: "wrap", marginTop: 10}}>
              {["React", "NextJs", "Flutter", "Angular", "Vue"].map((tech) => {
                return <Chip key={tech} label={tech} style={{margin: "5px 0"}}/>
              })}
              </Row>
              </Column>
            </motion.p>
          </Row>
          </GlowingBorder>
          </PerspectiveWrapper>
          </motion.div>
        </ParallaxLayer>
      </>
    );
  };

 const CaptionA = ({siteData}: {siteData?: SiteData}) => {
  const {isMobile} = useMediaQuery()
  const Build = () => {
    return <div className="w-full h-screen flex flex-col items-center justify-center p-5">
    <div className="w-full">
      <div className="font-extrabold text-white text-4xl sm:text-[60px] leading-[1.1] text-center sm:text-left">
        We Build Beautiful, High Fidelity
      </div>
      <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-rukipurple via-rukiblue to-rukiblue text-4xl sm:text-[60px] leading-[1.1] text-center sm:text-left">
        Web & Mobile Applications
      </div>
      <div className="font-bold text-neutral-200 text-lg sm:text-xl mt-5 text-center sm:text-left">
        Software Design & Development
      </div>
      <motion.div
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.15 }}
  className="font-semibold text-neutral-300 text-base sm:text-[18px] mt-5 w-full flex flex-col items-center xs:flex-row xs:items-center xs:justify-center sm:justify-start"
>
  <CTAButton
    text="Get In Touch"
    onClick={() => {}}
    size="large"
    style={{ borderRadius: 8, pointerEvents: "all" }}
  />
</motion.div>



    </div>
  </div>
  
  }
  return <Row alignment={Alignment.center} style={{
    width: isMobile ? "100%" : "50%",
  }}>
  <Build/>
  </Row>
  }
const CaptionB = ({siteData}: {siteData?: SiteData}) => {
  const {isMobile} = useMediaQuery()
    return <div className={`${styles.card}  relative w-full flex flex-row justify-end xs:justify-center`} style={{
      marginRight: isMobile ? "0": "15%"
    }}>
    <motion.img
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      src={laptopSiteMock.src}
      className="absolute z-[15] object-contain transform scale-[1.2] w-[100%] xs:w-[180%] max-w-[400px] h-auto"
    />
  </div>
}
const CaptionC = ({siteData}: {siteData?: SiteData}) => {
  const {isMobile} = useMediaQuery()
  return <Row alignment={Alignment.center} crossAlignment={Alignment.center} style={{width: !isMobile ? "35%" : "100%", marginRight: isMobile ? "" :"10%", marginTop: "10%"}}>
          <Row alignment={Alignment.spaceBetween}  style={{width: !isMobile ? 550 : 350, marginRight: !isMobile ? "5%" : ""}}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} style={{
            width: !isMobile ?  250 : 180, height: !isMobile ? 190 : 140, borderRadius: 12, border: '1px solid #fff', overflow: 'hidden', marginRight: 20
          }}>
          <motion.img alt="site mock"
            src={siteMock2.src}
            width={"100%"}
            height={"100%"}
            style={{  objectFit: 'cover', width: '100%', height: '100%',borderRadius: 12, transform :"scale(1.2)"}}
          />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} style={{
            width: !isMobile ? 250 : 180, height: !isMobile ? 190 : 140, borderRadius: 12, border: '1px solid #fff', overflow: 'hidden' 
          }}>
          <motion.img alt="site mock 3"
            src={siteMock3.src}
            width={"100%"}
            height={"100%"}
            style={{  objectFit: 'cover', borderRadius: 12,transform: "scale(1.2)"}}
          />
          </motion.div>
          </Row>
  </Row>
  
}
const CaptionD = ({siteData}: {siteData?: SiteData}) => {
  const {isMobile} = useMediaQuery()
  return <motion.div whileHover={
    {
      scale: 1.2,
      cursor: "pointer",
      transition: {
        duration: 0.4,
        type: "tween",
    }}
  } className={`${styles.card} `}  style={{
    marginRight: isMobile ? "0": "15%"
  }}> 
  
  <PerspectiveWrapper constrain={85}>
    <GlowingBorder borderRadius={"12px"} borderWidth={1} borderOpacity={1} borderColor="#fff">
    <Row crossAlignment={Alignment.top} style={{
      background: "linear-gradient(-5deg, #31cbc9cc -10%, #6a00f4cc  80%)",
      padding: 20, borderRadius: 12, maxWidth: 400, width: isMobile ? "80vw" : "60vw"
    }}>
      <IoIosBulb size={80} style={{marginTop: -20, marginLeft: 5}} color="white" />
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <Column crossAlignment={Alignment.center} alignment={Alignment.center}>
        <Typography className="mb-1">At Ruki we create imersive websites that make the best use of the latest technologies. Our developers and designers curate the best user experience for your customers. </Typography>
        <Row alignment={Alignment.left} style={{  flexWrap: "wrap", marginTop: 10}}>
        {["React", "NextJs", "Flutter", "Angular", "Vue"].map((tech) => {
          return <Chip key={tech} label={tech} style={{margin: "5px"}}/>
        })}
        </Row>
        </Column>
      </motion.p>
    </Row>
    </GlowingBorder>
    </PerspectiveWrapper>
    </motion.div>
}

const CaptionE = ({siteData}: {siteData?: SiteData}) => {
  const { isMobile } = useMediaQuery();
  
  // Use intersection observer to detect when component is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Animates only once when the component enters the view
    threshold: 0.3, // Adjust this value based on when you'd like the animation to trigger (0 to 1)

  });

  return (
    <motion.div 
    className={`${styles.card}  relative w-full flex flex-row justify-end xs:justify-center`} style={{
      marginRight: isMobile ? "0": "15%"
    }}
    >
      <motion.div
       
        initial={{ opacity: 0, y: -30, scale: 0.98 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1.2 } : {opacity: 0.3}} // Trigger animation when in view
        transition={{ duration: 0.4 }}
        style={{ width: isMobile ? 180 : 400 }}
      >
        <motion.img alt="main vid" ref={ref} src={mob_main_vid.src} style={{ width: '100%', height: 'auto' }} />
      </motion.div>
    </motion.div>
  );
}
const CaptionF = ({siteData, showBackground}: {siteData?: SiteData, showBackground?:boolean}) => {
  const { isMobile } = useMediaQuery();
  const {themeData} = useThemeChanger();
   // Use intersection observer to detect when component is in view
   const { ref, inView } = useInView({
    triggerOnce: false, // Animates only once when the component enters the view
    threshold: 0.3, // Adjust this value based on when you'd like the animation to trigger (0 to 1)
    
  });

  return <motion.div
  initial={{ opacity: 0, y: isMobile ? 0 :-30, scale: 0.9 }}
  animate={inView ?  { opacity: 1, y: 0, scale: isMobile ? 1 : 1.1 } : {opacity: isMobile ? 0.7 : 0.3}}
  transition={{ duration: isMobile ? 0.4 : 0.8, delay: 0.15 }}
  ref={ref}
  style={{ position: "relative", width: !isMobile ? "35%" : "100%", marginRight: isMobile ? "" :"10%",}}
  >

    {showBackground && <>
    {/* <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 0.8, scale: 1.2 }}
    style={{
    clipPath: "circle(50% at 50% 50%)",
    position: "absolute",
    zIndex: -1,
    height: 400, width: 400,
    background: `radial-gradient(circle, ${themeData.colors.primary} 0%, ${themeData.colors.secondary} 100%)`,
  }}/> */}
    <motion.div 
    initial={{ opacity: 0.7, scale: 1 }}
    animate={{ opacity: 0.8, scale: 1.2 }}
    transition={{repeat: Infinity, repeatType: "reverse", duration: 8.8}}
    style={{
    borderRadius: "100%",
    position: "absolute",
    border: `1px solid #ffffff5f`,
    zIndex: -1,
    height: 400, width: 400,
    bottom: 50,
    boxShadow: `0 0 20px 10px ${themeData.colors.primary}`,
    background: `radial-gradient(circle, ${themeData.colors.primary} 0%, ${themeData.colors.secondary} 100%)`,
  }}/>
    
    </> }
    <Row alignment={Alignment.center} crossAlignment={Alignment.center} >
    <Row style={{width: !isMobile ? 400 : 'auto'}}>
    <motion.img 
    animate={{
      x: isMobile ? 10 : -80,
      y: isMobile ? 0 : 10,
    }} 
    initial={{
      x: isMobile ? 10 : -80,
      y: isMobile ? 0 : 10,
    }} src={mob_1.src} style={{width: isMobile ? 180 : 400, height: "auto",}}/>
   { isMobile && <motion.img alt="mobile image" src={mob_2.src} width={ isMobile ? 180 : 400}  height = {"auto"} style={{ marginRight: 10}}/>}
    </Row>
    </Row>
    </motion.div>
}

const CaptionG = ({siteData}: {siteData?: SiteData}) => {
  const {isMobile} = useMediaQuery()
  return <motion.div 
  initial = {{
    y: 80
  }}
  whileHover={
    {
      scale: 1.2,
      cursor: "pointer",
      transition: {
        duration: 0.4,
        type: "tween",
    }}
  } className={`${styles.card} `}  style={{
    marginRight: isMobile ? "0": "15%",
  }}> 
  
  <PerspectiveWrapper constrain={85}>
    <GlowingBorder borderRadius={"12px"} borderWidth={1} borderOpacity={1} borderColor="#fff">
    <Row crossAlignment={Alignment.top} style={{
      background: "linear-gradient(-5deg, #31cbc9dc -10%, #6a00f4fc 80%)",
      padding: 20, borderRadius: 12, maxWidth: 400, width: isMobile ? "80vw" : "60vw"
    }}>
      <IoIosBulb size={80} style={{marginTop: -20, marginLeft: 5}} color="white" />
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <Column crossAlignment={Alignment.center} alignment={Alignment.center}>
        <Typography className="mb-1">
          Our Mobile Applications are designed to be user friendly and intuitive. We use the latest technologies to create applications that are fast and responsive.
        </Typography>
        <Row alignment={Alignment.left} style={{  flexWrap: "wrap", marginTop: 10}}>
        {["React Native", "Flutter", "Swift", "Vue"].map((tech) => {
          return <Chip key={tech} label={tech} style={{margin: "5px"}}/>
        })}
        </Row>
        </Column>
      </motion.p>
    </Row>
    </GlowingBorder>
    </PerspectiveWrapper>
    </motion.div>
}

  const alignCenter = { display: 'flex', alignItems: 'center' }
  SectionB.CaptionA = CaptionA;
  SectionB.CaptionB = CaptionB;
  SectionB.CaptionC = CaptionC;
  SectionB.CaptionD = CaptionD;
  SectionB.CaptionE = CaptionE;
  SectionB.CaptionF = CaptionF;
  SectionB.CaptionG = CaptionG;

  export default SectionB;
