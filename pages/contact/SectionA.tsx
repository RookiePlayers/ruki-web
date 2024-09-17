import { Grid, TextField } from "@mui/material";
import {motion} from "framer-motion";
import React, { createRef, forwardRef, useImperativeHandle } from "react";
import { useInView } from "react-intersection-observer";
import 'react-phone-number-input/style.css'
import PhoneNumberInput from 'react-phone-number-input'

export type UserDetails = {
    name: string;
    email: string;
    phone: string;
    companyName: string;
    companyWebsite: string;
}
type SeactionAProps = {
    defaultValue?: UserDetails
}
export type SectionARef = {
    getSummary: () => UserDetails;
}
const PhoneInput = forwardRef((props, ref) => {

    return (
      <TextField
        inputRef={ref}
        fullWidth
        label="Phone Number"
        variant="outlined"
        name="phone"
        {...props}
      />
      );
    });

    PhoneInput.displayName = 'PhoneInput';
const SectionA = forwardRef<SectionARef, SeactionAProps >(({defaultValue}, ref) => {
        const {ref: ViewRef, inView} = useInView({
            triggerOnce: false,
        });
        const phoneRef = createRef();
        const [details, setDetails] = React.useState<UserDetails>(
           defaultValue ?? {
            name: "",
            email: "",
            phone: "",
            companyName: "",
            companyWebsite: "",
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
            getSummary: () => {
                return details;
            }
        }), [details]);
        return <motion.div 
        ref={ViewRef}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={gridVariants}
        >
            <Grid container spacing = {2}>
                <Grid item xs={12}>
                    <motion.div variants={itemVariants}>
                        <TextField value={details.name} onChange={(v)=>{
                            setDetails({
                                ...details,
                                name: v.target.value
                            });
                        }} label="Your Name" variant="outlined" fullWidth/>
                    </motion.div>
                </Grid>
                <Grid item xs={12}>
                    <motion.div variants={itemVariants}>
                        <Grid container spacing={5}>
                            <Grid item xs={12} sm={6}>
                                <TextField value={details.email} onChange={(v)=>{
                            setDetails({
                                ...details,
                                email: v.target.value
                            });
                        }} label="Your Email" variant="outlined" fullWidth/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <PhoneNumberInput value={details.phone} onChange={(v)=>{
                            setDetails({
                                ...details,
                                phone: v?.toString() ?? ""
                            });
                        }} defaultCountry="IE" inputComponent={PhoneInput} fullWidth/>
                            </Grid>
                        </Grid>
                    </motion.div>
                </Grid>
                <Grid item xs={12}>
                <motion.div variants={itemVariants}>
                <Grid container spacing={5}>
                        <Grid item xs={12} sm={6}>
                            <TextField value={details.companyName} onChange={(v)=>{
                            setDetails({
                                ...details,
                                companyName: v.target.value
                            });
                        }} label="Company Name (optional)" variant="outlined" fullWidth/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField value={details.companyWebsite} onChange={(v)=>{
                            setDetails({
                                ...details,
                                companyWebsite: v.target.value
                            });
                        }} label="Company Website (optional)" variant="outlined" fullWidth/>
                        </Grid>
                    </Grid>
                    </motion.div>
                </Grid>
            </Grid>
        </motion.div>
    

});

SectionA.displayName = 'SectionA';
export default SectionA;