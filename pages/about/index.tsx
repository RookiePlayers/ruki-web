/* eslint-disable react-hooks/exhaustive-deps */
import {motion} from "framer-motion";
import Navbar from "../../components/navbar";
import { useThemeChanger } from "../../providers/ThemeChangerProvider";
import { useEffect, useState } from "react";
import styles from "../../index.module.css"
import { useMediaQuery } from "../../components/responsive_row/useMediaQuery";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import SectionA from "./sectionA";
import { SiteDataService } from "../services/sitedata";
import { SiteData } from "../../types";
import Footer from "../../components/footer";
import background from '../../assets/background.png';
import { Alignment, Column, Row } from "ruki-react-layouts";
import { url } from "inspector";
const About = () => {
    const {updateTheme, themeData} = useThemeChanger();
    const {getSiteData} = SiteDataService();
    const [siteData, setSiteData] = useState<SiteData>({ team: [] } as unknown as SiteData);
    const {isMobile} = useMediaQuery();
    useEffect(() => {
        updateTheme("light")
        getSiteData().then((data) => {
            setSiteData(data);
        })
    },[]);

    const BuildMobile = () => {
        return <Column style={{
            height: "100%"
        }}>
         <div className="mt-40"> <SectionA.CaptionA /></div>
           
            <Row alignment={Alignment.center} style={{width:"100%"}}>
            <SectionA.CaptionB siteData={siteData}/>
            </Row>
        </Column>
    }
    const BuildDesktop = () => {
        return <Column style={{
            height: "100%"
        }}>
            <div className="mt-40">
            <SectionA.CaptionA />
            </div>
            <Row alignment={Alignment.center} style={{width:"100%"}}>
            <SectionA.CaptionB siteData={siteData}/>
            </Row>
        </Column>
        
    }
   return <>
    <motion.div className="contact-background" style={{
        width: "100vw",
        backgroundPosition: "top center",
        backgroundImage: `url(${background.src})`,
        backgroundColor: themeData.colors.background.default,
        overflowX: "hidden",
    }}>
       <motion.div style={{
        margin: "0 auto",
        width: "100%",
        height: "100%",
        maxWidth: themeData.breakpoints.desktop,
        padding: 20,
       }}>
       {
            isMobile ? <BuildMobile /> : <BuildDesktop />
        }
       </motion.div>
            <Footer />
    </motion.div>
    <Navbar  pageNo={1}/>
   </> 
}

export default About;