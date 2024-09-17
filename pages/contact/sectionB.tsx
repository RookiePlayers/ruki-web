import { duration, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { forwardRef, useImperativeHandle } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const budgetRange = [
    "less than 25k",
    "25k - 50k",
    "50k - 100k",
    "100k - 200k",
    "200k - 500k",
    "500k+",
]
export type UserProjectInfo = {
    summary: string;
    budget: string;
}
export type SectionBRef = {
    getProjectInfo: () => UserProjectInfo;
}
type SectionBProps = {
    defaultValue?: UserProjectInfo
}
const SectionB = forwardRef<SectionBRef, SectionBProps>(({defaultValue}, ref) => {
        const [projectInfo, setProjectInfo] = React.useState<UserProjectInfo>(defaultValue ?? {
            summary: "",
            budget: "",
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
            getProjectInfo: () => projectInfo
        }), [projectInfo]);

        return <motion.div 
        ref={ViewRef}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={gridVariants}
        >
             <Grid container spacing = {2}>
            <Grid item xs={12}>
                <motion.div variants={itemVariants}>
                    <TextField value={projectInfo.summary} onChange={
                        (v)=>{
                            setProjectInfo({
                                ...projectInfo,
                                summary: v.target.value
                            });
                        }
                    } label="Tell us your story" variant="outlined" fullWidth multiline rows={6}/>
                </motion.div>
            </Grid>
            <Grid item xs={12}>
            <motion.div variants={itemVariants}>
            <FormControl fullWidth variant="outlined" >
            <InputLabel id="demo-simple-select-standard-label">What is your Budget estimation?</InputLabel>
                <Select placeholder="What is your Budget estimation?" fullWidth label="What is your Budget estimation?" value={projectInfo.budget} onChange={(e)=>{
                    setProjectInfo({
                        ...projectInfo,
                       budget: e.target.value as string
                    });
                }}>
                    {
                        budgetRange.map((range, index) => <MenuItem key={index} value={range} >{range}</MenuItem>)
                    }
                </Select>
                </FormControl>
            </motion.div>
            </Grid>
    
        </Grid>
        </motion.div>
    
})

export default SectionB;