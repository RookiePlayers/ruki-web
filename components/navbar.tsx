import React, { useEffect, useState } from "react";
import { GiCancel, GiHamburgerMenu } from "react-icons/gi";
import { FaRocket, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { RiTeamFill } from "react-icons/ri";
import {
  alpha,
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { ThemeSettings, toPascalCase } from "../utils";
import { GlobalStylesData } from "../globalStyles";
import { Alignment, Column, Row } from "ruki-react-layouts";
import { useThemeChanger } from "../providers/ThemeChangerProvider";
import { ThemedLogo } from "./logo";
import { AnimatePresence, delay, motion, stagger } from "framer-motion";
import { useMediaQuery } from "./responsive_row/useMediaQuery";
import {
  IoIosClose,
  IoIosCloseCircleOutline,
  IoMdArrowRoundForward,
} from "react-icons/io";
import { SiteDataService } from "../pages/services/sitedata";
import { SiteData } from "../types";
import { CTAButton } from "./cta_button";
import { useRouter } from "next/router";

export const NavBarHeight = 55;

export const NavData = [
  {
    title: "Home",
    index: 0,
    link: "/",
    icon: <FaRocket />,
  },
  {
    title: "About us",
    link: "/about",
    index: 1,
    icon: <RiTeamFill />,
  },
  // {
  //   title: "Projects",
  //   link: "/projects",
  //   index: 3,
  //   icon: <FaGithub />,
  // },
  // {
  //   title: "Team",
  //   link: "/team",
  //   index: 4,
  //   icon: <RiTeamFill />,
  // },
];

export const BuildAppbar = ({
  pageNo,
  onOpenMenu,
  siteData,
}: {
  pageNo: number;
  siteData?: SiteData;
  onOpenMenu: () => void;
}) => {
  const { themeData } = useThemeChanger();
  const { isMobile } = useMediaQuery();
  const router = useRouter();
  const style = GlobalStylesData(themeData);
  return (
    <AppBar
      position="fixed"
      elevation={0}
      style={{
        backgroundColor: alpha(
          themeData.colors.appbar?.background ?? "#fff",
          0.8
        ),
        backdropFilter: "blur(10px)",
        borderBottom: themeData.colors.appbar?.border,
      }}
    >
      <div
        style={{ ...style.centeredPage, padding: "12px 20px", maxWidth: 1040 }}
      >
        <Row
          style={{ width: "auto" }}
          alignment={Alignment.spaceBetween}
          crossAlignment={Alignment.center}
        >
          <Column alignment={Alignment.center} crossAlignment={Alignment.right}>
            <Link href="/" passHref>
              <ThemedLogo logoStyle={{ height: 30 }} isFullLogo />
            </Link>
          </Column>
          
          {!isMobile ? (
            <Row alignment={Alignment.spaceBetween} crossAlignment={Alignment.center}>
                <Row alignment={Alignment.center}>
              {NavData.sort((a, b) => a.index - b.index).map((item, index) => (
                <Link href={item.link} key={index} passHref>
                  <a
                    style={{
                      color: "white",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      marginLeft: 10,
                    }}
                  >
                    <motion.h3
                      transition={{
                        ease: "linear",
                        type: "spring",
                        duration: 0.3,
                      }}
                      whileHover={{
                        color: `${themeData.colors.secondary}`,
                        opacity: 1,
                        scale: 1.03,
                      }}
                      style={{
                        marginLeft: 5,
                      
                        cursor: "pointer",
                        opacity: index === pageNo ? 1 : 0.7,
                        color:
                          index === pageNo
                            ? themeData.colors.text.primary
                            : themeData.colors.text.secondary,
                      }}
                    >
                      {item.title}
                    </motion.h3>
                  </a>
                </Link>
              ))}
            </Row>
              <motion.div
                transition={{
                  type: "spring",
                  duration: 0.3,
                }}
                style = {{
                  marginLeft: 15
                }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
              >
                <CTAButton text="Contact Us" onClick={() => {
                  router.push("/contact");
                }} />
              </motion.div>
            </Row>
          ) : (
            <IconButton onClick={onOpenMenu}>
              <GiHamburgerMenu size={20} />
            </IconButton>
          )}
        </Row>
      </div>
    </AppBar>
  );
};
const BuildDrawer = ({
  open,
  onClose,
  pageNo,
  siteData,
}: {
  open: boolean;
  pageNo: number;
  siteData?: SiteData;
  onClose: () => void;
}) => {
  const { themeData } = useThemeChanger();
  const style = GlobalStylesData(themeData);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const listVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: "-100%",
      opacity: 0,
    },
  };

  const signatureBoxVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        easing: "easeInOut",
        staggerChildren: 0.1,
      },
    },
    exit: {
      y: 100,
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const signatureVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "linear",
      },
    },
    exit: {
      y: 100,
      opacity: 0,
    },
  };

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <AnimatePresence>
      <Drawer
        open={open}
        style={{ backdropFilter: "blur(10px)" }}
        PaperProps={{
          style: {
            backgroundColor: alpha(
              themeData.colors.appbar?.background ?? "#fff",
              0.9
            ),
            backdropFilter: "blur(30px)",
          },
        }}
      >
        <Column
          alignment={Alignment.spaceBetween}
          crossAlignment={Alignment.center}
          style={{
            width: "100vw",
            height: "100%",
            padding: 30,
          }}
        >
          <motion.div
            whileTap={{ scale: 0.9 }}
            exit={{ opacity: 0, scale: 0.8 }}
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1.0,
              transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 260,
              },
              opacity: 1,
            }}
          >
            <IconButton onClick={onClose}>
              <IoIosCloseCircleOutline size={50} />
            </IconButton>
          </motion.div>
          <motion.div
            variants={listVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ flex: 1 }}
          >
            <List style={{ padding: "50px 20px" }}>
              {NavData.sort((a, b) => a.index - b.index).map((item, index) => (
                <motion.div key={index} variants={listItemVariants}>
                  <Row
                    alignment={Alignment.center}
                    crossAlignment={Alignment.center}
                  >
                    {pageNo === index ? (
                      <motion.div
                        animate={{
                          x: [10, 0, 10],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          repeatType: "mirror",
                        }}
                      >
                        <IoMdArrowRoundForward
                          size={20}
                          color={themeData.colors.text.primary}
                        />
                      </motion.div>
                    ) : (
                      <></>
                    )}
                    <ListItemButton key={index} style={{ textAlign: "center" }}>
                      <Link href={item.link} passHref>
                        <ListItemText
                          primary={
                            <Typography
                              style={{
                                fontSize: 30,
                                opacity: pageNo === index ? 1 : 0.7,
                                textAlign: "center",
                              }}
                            >
                              {item.title}
                            </Typography>
                          }
                          style={{ fontSize: 20 }}
                        />
                      </Link>
                    </ListItemButton>
                  </Row>
                </motion.div>
              ))}
              {
                <motion.div variants={listItemVariants}>
                  <CTAButton
                    text="Contact Us"
                    size= {"large"}
                    width={"100%"}
                    onClick={() => {
                      router.push("/contact");
                    }}
                    style={{
                      width: "100%",
                      marginTop: 20,
                    }}
                  />
                </motion.div>
              }
            </List>
          </motion.div>
          <motion.div
            variants={signatureBoxVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <Column crossAlignment={Alignment.center}>
              <motion.div variants={signatureVariants}>
                <ThemedLogo isFullLogo />
              </motion.div>
              <motion.div variants={signatureVariants}>
                {siteData && (
                  <Typography
                    variant="caption"
                    style={{ marginTop: 5 }}
                    color={alpha(themeData.colors.text.secondary, 0.8)}
                  >
                    {siteData.slogan}
                  </Typography>
                )}
              </motion.div>
              <motion.div variants={signatureVariants}>
                <Typography
                  variant="caption"
                  style={{ marginTop: 5 }}
                  color={alpha(themeData.colors.text.secondary, 0.8)}
                >
                  Copyright © {new Date().getFullYear()}{" "}
                  {toPascalCase(siteData?.name ?? "")}. All Rights Reserved
                </Typography>
              </motion.div>
            </Column>
          </motion.div>
        </Column>
      </Drawer>
    </AnimatePresence>
  );
};
export default function Navbar({ pageNo }: { pageNo: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const { getSiteData } = SiteDataService();
  const [siteData, setSiteData] = useState<SiteData | undefined>(undefined);

  useEffect(() => {
    getSiteData({
      onComplete: (data) => {
        setSiteData(data);
      },
    });
  }, []);

  const handleNavMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {
        <BuildAppbar
          siteData={siteData}
          onOpenMenu={() => {
            setIsOpen(true);
          }}
          pageNo={pageNo}
        />
      }
      {
        <BuildDrawer
          siteData={siteData}
          pageNo={pageNo}
          onClose={() => {
            setIsOpen(false);
          }}
          open={isOpen}
        />
      }
    </>
  );
}
