import { ThemeData } from "./types";
import { ThemeSettings } from "./utils";

type GlobalStylesKeys = "centeredPage";

export const GlobalStylesData = (theme: ThemeData  = ThemeSettings): {[key in GlobalStylesKeys]: React.CSSProperties} => {
    return {
        centeredPage: {
            maxWidth: theme.breakpoints.desktop,
            margin: "0 auto",
            width: "100%"
        }
    }
}