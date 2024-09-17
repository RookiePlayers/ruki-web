import { useInView } from "react-intersection-observer";
import { SiteData } from "../../types";
import { motion } from "framer-motion";
import { GlowingBorder } from "../../components/glowing_border";
import { Alignment, Column, Row } from "ruki-react-layouts";
import { useThemeChanger } from "../../providers/ThemeChangerProvider";
import { useMediaQuery } from "../../components/responsive_row/useMediaQuery";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const SectionD = () => {
    return <></>
}

const CaptionA = ({siteData}: {siteData?: SiteData}) => {
    const { ref, inView } = useInView({});
    return <motion.div 
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        >
        <div className="font-extrabold text-black text-4xl sm:text-[60px] leading-[1.1] text-center">
            What we use..
      </div>
    </motion.div>
}
const CaptionB = ({siteData}: {siteData?: SiteData}) => {
    const { ref, inView } = useInView({});
    const {isMobile} = useMediaQuery();
    const {themeData} = useThemeChanger();
    const gridVariants = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.1,
            },
        }
      };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
        };
    const tools = {
        mobile: [
            {
                name: "Flutter",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Google-flutter-logo.svg/2560px-Google-flutter-logo.svg.png"
            },
            {
                name: "React Native",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
            },
            {
                name: "Swift",
                icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuTiCIxcGExISpbuEFg0caOI27K-BVSjybQQ&s"
            },
            {
                name: "Kotlin",
                icon: "https://1000logos.net/wp-content/uploads/2016/10/android-logo-wordmark.png"
            },
            {
                name: "Java",
                icon: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
            },
            {
                name: "Dart",
                icon: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Dart_programming_language_logo.svg"
            }
        ],
        web: [
            {
                name: "React",
                icon: "https://cdn.prod.website-files.com/61b9e37d1106b57eaa076efd/629df2647290ef3b75d74f2c_a2bc81309136b0c1864f582b1af95307_546c60cadefd5c0f5e78014543c554cb.png"
            },
            {
                name: "TypeScript",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
            },
            {
                name: "NodeJs",
                icon: "https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2021/09/nodejs.png?fit=512%2C256&ssl=1"
            },
            {
                name: "GraphQL",
                icon: "https://miro.medium.com/v2/resize:fit:1000/0*-jr_5TuAYLcWVfQA.png"
            },
            {
                name: "NextJs",
                icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
            },
            {
                name: "Gatsby",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Gatsbyjs.png/1200px-Gatsbyjs.png"
            }
        ],
        game: [
            {
                name: "Unity",
                icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Official_unity_logo.png"
            },
            {
                name: "Gadot",
                icon: "https://www.peanuts-code.com/images/godot_logo/logo_large_color_light.png"
            },
            {
                name: "Unreal Engine",
                icon: "https://download.logo.wine/logo/Unreal_Engine/Unreal_Engine-Logo.wine.png"
            },
            {
                name: "Corona Labs",
                icon: "https://images.ctfassets.net/3prze68gbwl1/asset-17suaysk1qa1j15/6facd574f56a24a54c2ddcb951c4f3a9/corona_logo.png"
            },
            {
                name: "blender",
                icon: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg"
            }
        ],
        backend: [
            {
                name: "ExpressJs",
                icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
            },
            {
                name: "Spring",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/2560px-Spring_Framework_Logo_2018.svg.png"
            },
            {
                name: "AWS",
                icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
            },
            {
                name: "Firebase",
                icon: "https://firebase.google.com/static/downloads/brand-guidelines/SVG/logo-standard.svg"
            },
            {
                name: "MongoDB",
                icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
            },
            {
                name: "PostgreSQL",
                icon: "https://1000logos.net/wp-content/uploads/2020/08/PostgreSQL-Logo.png"
            },
            {
                name: "GCP",
                icon: "https://www.serviops.ca/wp-content/uploads/2015/07/Google-Cloud-Platform-GCP-Logo.png"
            },
            {
                name: "Docker",
                icon: "https://upload.wikimedia.org/wikipedia/commons/7/70/Docker_logo.png"
            },
            {
                name: "Heroku",
                icon: "https://seeklogo.com/images/H/heroku-logo-B774A78667-seeklogo.com.png"
            }
        ]
    }

    return <motion.div
    ref={ref}
    initial="hidden"
    animate={inView ? "show" : "hidden"}
    exit="exit"
    variants={gridVariants}
    style={{
        width: isMobile ? themeData?.breakpoints.mobile : themeData?.breakpoints.desktop,
        padding: "0 30px",
        position: "relative",
    }}
    className={`full`}>
        <Column style={{
            width: "100%",
            position: "relative",
            height: "100%",
        }}>
            {
                Object.keys(tools).map((tool, index) => {
                    const toolData = tools[tool as keyof typeof tools];
                    return <div key={tool} style={{position: "relative", width: "100%", marginBottom: 80,}}>
                    <Row style={{
                        position: "absolute",
                        zIndex: 1,
                        width: "100%",
                        height: "100%",
                    }} alignment={Alignment.spaceBetween}>
                        <motion.div style={{
                            left: 0,
                            width: "30%",
                            height: "100%",
                            background: `linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(245,255,255,1) 100%)`,
                        }}/>
                        <motion.div style={{
                            left: 0,
                            width: "30%",
                            height: "100%",
                            background: `linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(245,255,255,1) 100%)`,
                        }}/>
                    </Row>
                        <AliceCarousel autoPlayDirection={
                            index % 2 === 0 ? "rtl" : "ltr"
                        }  animationDuration={
                            1500
                        } disableDotsControls disableSlideInfo disableButtonsControls autoPlay responsive={
                            {
                                0: { items: 6 }
                            }
                        } infinite>
                            {
                                toolData.map((tool, index) => {
                                    return <div key={`${tool.name}_${index}`} className="flex items-center justify-center">
                                        <img src={tool.icon} alt={tool.name} className="object-contain" style={{height: 60, width: 80}}/>
                                    </div>
                                })
                            }
                        </AliceCarousel>
                </div>
                })
            }
        </Column>
    </motion.div>
    
}
SectionD.CaptionA = CaptionA;
SectionD.CaptionB = CaptionB;

export default SectionD;