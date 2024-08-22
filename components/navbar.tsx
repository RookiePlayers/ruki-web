import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaRocket, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import Link from 'next/link';
import { RiTeamFill } from 'react-icons/ri';
import { AppBar, Toolbar } from '@mui/material';
import { ThemeSettings } from '../utils';
import { GlobalStylesData } from '../globalStyles';
import { Alignment, Column } from 'ruki-react-layouts';
import { useThemeChanger } from '../providers/ThemeChangerProvider';
import { ThemedLogo } from './logo';



export const NavData = [
  {
    title: 'Home',
    link: '/',
    icon: <FaRocket />
  },
  {
    title: 'About us',
    link: '/about',
    icon: <RiTeamFill />
  },
  {
    title: 'Contact',
    link: '/contact',
    icon: <MdEmail />
  },
  {
    title: 'Projects',
    link: '/projects',
    icon: <FaGithub />
  },
  {
    title: 'Team',
    link: '/team',
    icon: <RiTeamFill />
  }
]

export const BuildAppbar = ({isMobile}: {isMobile: boolean}) => {
  const {themeData} = useThemeChanger();
  const style = GlobalStylesData(themeData);
  return <AppBar position="static" style={{ backgroundColor: '#1a1a1a'}}>
    <Toolbar style={style.centeredPage}>
      <Column alignment={Alignment.center}>
        <Link href="/" passHref>
          <ThemedLogo logoStyle={{height: 30}} isFullLogo />
        </Link>
      </Column>
      <div style={{ marginLeft: 'auto', display: 'flex' }}>
        {NavData.map((item, index) => (
          <Link href={item.link} key={index} passHref>
            <a style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', marginLeft: 20 }}>
              {item.icon}
              <h3 style={{ marginLeft: 5 }}>{item.title}</h3>
            </a>
          </Link>
        ))}
        </div>
    </Toolbar>
    </AppBar>
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {<BuildAppbar />}
    </>
  )
}