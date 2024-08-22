import FullWhiteLogo from '../public/assets/images/logoV2_full_white.png'
import FullBlackLogo from '../public/assets/images/logoV2_full.png'
import SmallWhiteLogo from '../public/assets/images/logov2_white.png'
import SmallBlackLogo from '../public/assets/images/logoV2.png'
import { useThemeChanger } from '../providers/ThemeChangerProvider'
import { CSSProperties } from 'react'

export const ThemedLogo = ({ isFullLogo, logoStyle }: { isFullLogo: boolean; logoStyle?: CSSProperties }) => {
    const { currentTheme } = useThemeChanger();

    
    const LogoComponent = currentTheme.palette.mode === 'light' ? 
        (isFullLogo ? DarkLogoFull : DarkLogoSmall) : (isFullLogo ? LightLogoFull : LightLogoSmall);
    return <LogoComponent logoStyle={logoStyle} />
}

export const LightLogoFull = ({ logoStyle = {} }: { logoStyle?: CSSProperties }) => {
    return <img src={FullWhiteLogo.src} alt="Ruki Logo" style={{ height: 50, objectFit: 'contain', ...logoStyle }} />
}

export const DarkLogoFull = ({ logoStyle = {} }: { logoStyle?: CSSProperties }) => {
    return <img src={FullBlackLogo.src} alt="Ruki Logo" style={{ height: 50, objectFit: 'contain', ...logoStyle }} />
}

export const LightLogoSmall = ({ logoStyle = {}}: { logoStyle?: CSSProperties }) => {
    return <img src={SmallWhiteLogo.src} alt="Ruki Logo" style={{ height: 50, objectFit: 'contain', ...logoStyle }} />
}

export const DarkLogoSmall = ({ logoStyle = {}}: { logoStyle?: CSSProperties }) => {
    return <img src={SmallBlackLogo.src} alt="Ruki Logo" style={{ height: 50, objectFit: 'contain', ...logoStyle }} />
}