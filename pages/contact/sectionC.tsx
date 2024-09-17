import { duration, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { forwardRef, useImperativeHandle } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const referalMedium = [
    "LinkedIn",
    "Social Media",
    "Google",
    "Friends",
    "Other",
]
export type UserReferal = {
    referal: string;
    other?: string;
}
export type SectionCRef = {
    getReferalData: () => UserReferal;
}

type SectionCProps = {
    defaultValue?: UserReferal
}
const SectionC = forwardRef<SectionCRef, SectionCProps>(({defaultValue}, ref) => {
        const [referalData, setReferal] = React.useState<UserReferal>(defaultValue ?? {
            referal: "",
        });
        const {ref: ViewRef, inView} = useInView({
            triggerOnce: false,
        });
        const gridVariants = {
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                duration: 0.5,
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
        
        useImperativeHandle(ref, () => ({
            getReferalData: () => referalData
        }), [referalData]);
        return <motion.div 
        ref={ViewRef}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={gridVariants}
        >
             <Grid container spacing = {2}>
            <Grid item xs={12}>
            <motion.div variants={itemVariants}>
            <FormControl fullWidth variant="outlined" >
            <InputLabel id="demo-simple-select-standard-label">Where did you hear about us?</InputLabel>
                <Select fullWidth value={referalData.referal} onChange={(e)=>{
                    setReferal({
                        ...referalData,
                        referal: e.target.value as string
                    });
                }}>
                    {
                        referalMedium.map((range, index) => <MenuItem key={index} value={range} >{range}</MenuItem>)
                    }
                </Select>
                </FormControl>
            </motion.div>
            </Grid>
            <Grid item xs={12}>
                
            {
                referalData.referal === "Other" && <motion.div variants={itemVariants}>
                    <TextField 
                    value={referalData.other}
                    onChange={(e)=>{
                        setReferal({
                            ...referalData,
                            other: e.target.value
                        });
                    }}
                    label="Please specify" variant="outlined" fullWidth/>
                </motion.div>
            }
            </Grid>
    
        </Grid>
        </motion.div>
    
})

SectionC.displayName = "SectionC";
export default SectionC;