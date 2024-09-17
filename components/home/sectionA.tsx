import { ParallaxLayer } from "@react-spring/parallax";
import { GlobalStylesData } from "../../globalStyles";
import { useMediaQuery } from "../responsive_row/useMediaQuery";
import { SiteData } from "../../types";
import { ThemedLogo } from "../logo";
import {motion} from "framer-motion";
import { CTAButton } from "../cta_button";
const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

const SectionA = ({siteData}: {siteData?: SiteData}) => {
    const {isMobile} = useMediaQuery()
    return (
      <>
        <ParallaxLayer
          offset={-0.1}
          speed={0.1}
          style={{
            pointerEvents: "none",
            ...GlobalStylesData().centered,
            marginTop: isMobile ? "8vh" : "8vh",
          }}
        >
          <CaptionA siteData={siteData} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.2}
          style={{
            pointerEvents: "none",
            ...GlobalStylesData().centered,
            marginTop: isMobile ? "-1vh" : "-1vh",
          }}
        >
            <CaptionB siteData={siteData} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.05}
          speed={0.3}
          style={{ pointerEvents: "none", ...GlobalStylesData().centered,
            marginTop: isMobile ?  "8vh" : "2vh", }}
        >
            <CaptionC siteData={siteData} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.18}
          speed={0.3}
          style={{ pointerEvents: "none", ...GlobalStylesData().centered, marginTop: isMobile ?  "10vh" : "0vh",}}
        >
            <CaptionD siteData={siteData} />
        </ParallaxLayer>
      </>
    );
  };

const CaptionA = ({siteData}: {siteData?: SiteData}) => {
    return (
        <motion.div
            animate={{ scale: [0.9, 1, 0.9] }}
            transition={{
              repeatType: "mirror",
              repeat: Infinity,
              repeatDelay: 1.5,
            }}
          >
            <ThemedLogo logoStyle={{ height: 100 }} isFullLogo={false} />
          </motion.div>
    )
}
const CaptionB = ({siteData}: {siteData?: SiteData}) => {
    const {isMobile} = useMediaQuery()
    return (
        <motion.div
            initial={{ opacity: 0, y: (isMobile ? -60 : -20) }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-extrabold text-white text-[40px] w-[100%] text-center leading-[1.1]">
            {siteData?.slogan}
          </motion.div>
    )
}
const CaptionC = ({siteData}: {siteData?: SiteData}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-semibold text-neutral-300 text-[18px] mt-[5%] lg:w-[100%] xs:w-[80%] text-center"
            style={{maxWidth: 620, minWidth: 250, padding: "0 16px"}}
          >
            {siteData?.aboutSummary}
          </motion.div>
    )
}
const CaptionD = ({siteData}: {siteData?: SiteData}) => {
    return (
        <motion.div
            style={{ ...GlobalStylesData().centerRow }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-semibold text-neutral-300 text-[18px] mt-[5%] w-[65%] text-center"
          >
            <CTAButton
              text="Contact Us"
              onClick={() => {}}
              size="large"
              style={{ borderRadius: 8, pointerEvents: "all", transform: "scale(1.2)" }}
            />
          </motion.div>
    )
}

SectionA.CaptionA = CaptionA
SectionA.CaptionB = CaptionB
SectionA.CaptionC = CaptionC
SectionA.CaptionD = CaptionD

export default SectionA