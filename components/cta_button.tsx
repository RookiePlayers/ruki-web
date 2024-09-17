import { alpha, Button } from "@mui/material";
import { useThemeChanger } from "../providers/ThemeChangerProvider";
import { motion } from "framer-motion";
export type CTAButtonProps = {
  text: string | React.ReactNode;
  onClick: () => void;
  fontSize?: string;
  border?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  disableElevation?: boolean;
  size?: "small" | "medium" | "large";
  width?: string | "fit-content";
};
export const CTAButton = ({
  text,
  onClick,
  disableElevation,
  style,
  size,
  width = "fit-content",
}: CTAButtonProps) => {
  const { themeData } = useThemeChanger();
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        //boxShadow: `0px 0px 4px ${alpha(themeData.colors.primary, 0.5)}`,
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{ cursor: "pointer", width: width }}
    >
      <Button
        color="primary"
        variant="contained"
        disableElevation={disableElevation}
        size={size ?? "small"}
        style={{
          textTransform: "none",
          background: `linear-gradient(-46deg ,${themeData.colors.primary} 60%, ${themeData.colors.secondary} 120%)`,
          ...style,
        }}
      >
        {text}
      </Button>
    </motion.div>
  );
};
