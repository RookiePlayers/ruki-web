import { motion } from 'framer-motion';
import { Alignment, Column, Row } from 'ruki-react-layouts';
import { ThemedLogo } from './logo';
import { useThemeChanger } from '../providers/ThemeChangerProvider';
import { useInView } from 'react-intersection-observer';
import { SiFacebook, SiInstagram, SiLinkedin, SiTiktok, SiX } from 'react-icons/si';
import { Icon } from '@mui/material';
import { useMediaQuery } from './responsive_row/useMediaQuery';
export default function Footer() {
    const { ref, inView } = useInView({ triggerOnce: true });
    const {isMobile} = useMediaQuery();
    const { themeData } = useThemeChanger();
    return (
        <motion.div ref={ref} className={"h-[100%] p-10"} style={{
            background: themeData.colors.background.default,
            width: "100%"
        }}>
            <Column style={{ height: "100%", maxWidth: themeData.breakpoints.desktop }} alignment={
                isMobile ? Alignment.center : Alignment.bottom
            } crossAlignment={
                isMobile ? Alignment.center : Alignment.right 
            }>

                <motion.div initial={{ y: 0, opacity: 0 }} transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                    type: "tween"
                }} animate={inView ? { y: 10, opacity: 1 } : {}}>
                    <Row crossAlignment={Alignment.center}>
                        <ThemedLogo logoStyle={{ height: 30 }} isFullLogo />
                        <div style={{ width: 1, height: 30, margin: "0 10px", background: `radial-gradient(${themeData.colors.text.primary} 10%, transparent 70%)` }} />
                        <motion.div onClick={()=>{
                            window.open("https://www.instagram.com/rukistudios", "_blank")
                        }} whileHover={{
                            opacity: 1, 
                            cursor: "pointer"
                        }} style={{ color: themeData.colors.text.primary, fontSize: 10, opacity: 0.6, marginRight: 10 }}><Icon fontSize='small'>
                                <SiInstagram />
                            </Icon></motion.div>
                        <motion.div onClick={()=>{
                            window.open("https://x.com/RukiStudios", "_blank")
                        }} whileHover={{
                            opacity: 1, 
                            cursor: "pointer"
                        }} style={{ color: themeData.colors.text.primary, fontSize: 10, opacity: 0.6, marginRight: 10  }}><Icon fontSize='small'>
                                <SiX />
                            </Icon></motion.div>
                        <motion.div onClick={()=>{
                            window.open("https://instagram.com/ruki.design", "_blank")
                        }} whileHover={{
                            opacity: 1, 
                            cursor: "pointer"
                        }} style={{ color: themeData.colors.text.primary, fontSize: 10, opacity: 0.6 }}><Icon fontSize='small'>
                                <SiLinkedin />
                            </Icon></motion.div>
                    </Row>
                </motion.div >
                <motion.div className="text-sm" initial={{ y: -10, opacity: 0 }} transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                    type: "tween"
                }} animate={inView ? { y: 0, opacity: 0.8 } : {}} style={{
                    color: themeData.colors.text.secondary,
                    opacity: 0.7,
                    marginTop: 12,
                    marginBottom: 10
                }}>© {new Date().getFullYear()} Ruki. All rights reserved.</motion.div>

            </Column>
        </motion.div>
    )
}