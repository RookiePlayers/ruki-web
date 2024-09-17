import { useInView } from "react-intersection-observer";
import { SiteData } from "../../types";
import { motion } from "framer-motion";
import { GlowingBorder } from "../../components/glowing_border";
import { Column, Row } from "ruki-react-layouts";
import { useThemeChanger } from "../../providers/ThemeChangerProvider";
const SectionC = () => {
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
            How does it work?
      </div>
    </motion.div>
}
const CaptionB = ({siteData}: {siteData?: SiteData}) => {
    const { ref, inView } = useInView({});
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
    
    const steps = [
        {
            title: "It starts with an idea",
            "description": "We'll work with you to understand your vision and goals, and help you bring your idea to life.",
            icon: "💡",
            index: 0,
            nextIndex: 1
        },
        {
            title: "We'll design it",
            "description": "Our team of designers will create a beautiful and functional design that meets your needs.",
            icon: "🎨",
            index: 1,
            nextIndex: 2
        },
        {
            title: "We'll build it",
            "description": "Our team of developers will build your website or app, and make sure it works perfectly.",
            icon: "🔨",
            index: 2,
            nextIndex: 3
        },
        {
            title: "We'll launch it",
            "description": "We'll help you launch your website or app, and make sure it's a success.",
            icon: "🚀",
            index: 3,
            nextIndex: 0
        }
    ]
    return <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="exit"
        variants={gridVariants}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {steps.map((step, index) => (
            <motion.div
                key={index}
                variants={itemVariants}
                style={{cursor: "text"}}
                className="flex items-center space-x-4">
                <GlowingBorder borderRadius={"12px"} borderColor={themeData.colors.primary} borderWidth={2}>
                    <Column style={{
                        maxWidth: 400,
                        padding: 20,
                        borderRadius: 12,
                        backgroundColor: "#f7faff",
                        border: `1px solid white`,
                    }}>
                    <Row>
                        <div className="text-2xl">{step.icon}</div>
                        <div className="font-bold text-2xl text-gray-500">{step.title}</div>
                    </Row>
                    <Row>
                        <div className="text-gray-500">{step.description}</div>
                    </Row>

                    </Column>

                </GlowingBorder>
            </motion.div>
        ))}
    </motion.div>
    
}
SectionC.CaptionA = CaptionA;
SectionC.CaptionB = CaptionB;

export default SectionC;