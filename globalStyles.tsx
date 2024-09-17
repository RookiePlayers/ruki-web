import { ThemeData } from "./types";
import { ThemeSettings } from "./utils";

type GlobalStylesKeys = "centeredPage" | "centerColumn" | "centerRow" | "centered";

export const GlobalStylesData = (theme: ThemeData  = ThemeSettings): {[key in GlobalStylesKeys]: React.CSSProperties} => {
    return {
        centeredPage: {
            maxWidth: theme.breakpoints.desktop,
            margin: "0 auto",
            width: "100%"
        },
        centerColumn: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        },
        centerRow: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
        },
        centered: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        }
    }
}