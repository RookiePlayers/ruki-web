import FullWhiteLogo from '../public/assets/images/logoV2_full_white.png'
import FullBlackLogo from '../public/assets/images/logoV2_full.png'
import SmallWhiteLogo from '../public/assets/images/logov2_white.png'
import SmallBlackLogo from '../public/assets/images/logoV2.png'
import { useThemeChanger } from '../providers/ThemeChangerProvider'
import { CSSProperties } from 'react'
import {motion} from 'framer-motion'

export const ThemedLogo = ({ isFullLogo, logoStyle }: { isFullLogo: boolean; logoStyle?: CSSProperties }) => {
    const { currentTheme } = useThemeChanger();

    
    const LogoComponent = currentTheme.palette.mode === 'light' ? 
        (isFullLogo ? DarkLogoFull : DarkLogoSmall) : (isFullLogo ? LightLogoFull : LightLogoSmall);
    return <LogoComponent logoStyle={logoStyle} />
}

export const LightLogoFull = ({ logoStyle = {} }: { logoStyle?: CSSProperties }) => {
    return <motion.img src={FullWhiteLogo.src} width={50}
    height={50} alt="Ruki Logo" style={{objectFit: 'contain', width: 50, height: "auto", ...logoStyle, }} />
}

export const DarkLogoFull = ({ logoStyle = {} }: { logoStyle?: CSSProperties }) => {
    return <motion.img src={FullBlackLogo.src} alt="Ruki Logo" width={50}
    height={50} style={{ objectFit: 'contain',width: 50, height: "auto", ...logoStyle }} />
}

export const LightLogoSmall = ({ logoStyle = {}}: { logoStyle?: CSSProperties }) => {
    return <motion.img src={SmallWhiteLogo.src} alt="Ruki Logo" width={50}
    height={50} style={{ objectFit: 'contain',width: 50, height: "auto", ...logoStyle }} />
}

export const DarkLogoSmall = ({ logoStyle = {}}: { logoStyle?: CSSProperties }) => {
    return <motion.img src={SmallBlackLogo.src} alt="Ruki Logo"  
    width={50}
    height={50} style={{ objectFit: 'contain',width: 50, height: "auto", ...logoStyle }} />
}