import { duration, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import React, { forwardRef, useImperativeHandle } from "react";
import { motion } from "framer-motion";
import dayjs, { Dayjs } from 'dayjs';
import { useInView } from "react-intersection-observer";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Alignment, Column } from "ruki-react-layouts";


const daysToIgnore = (dateFrom:Date, dateEnd: Date) => {
    const datesToBeIgnores = [];
    const publicHolidays2024 = [
        new Date("2024-01-01"),
        new Date("2024-01-26"),
        new Date("2024-03-29"),
        new Date("2024-04-01"),
        new Date("2024-04-25"),
        new Date("2024-06-10"),
        new Date("2024-12-25"),
        new Date("2024-12-26"),
    ];
    //ignore all modays, tues and wednesdays
    let currentDate = new Date(dateFrom);
    while(currentDate <= dateEnd){
        if(currentDate.getDay() === 1 || currentDate.getDay() === 2 || currentDate.getDay() === 3){
            datesToBeIgnores.push(dayjs(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`));
        }
        //ignore pubilc holidays
        if(publicHolidays2024.some((holiday) => holiday.toDateString() === currentDate.toDateString())){
            datesToBeIgnores.push(dayjs(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`));
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return datesToBeIgnores;
}
export type UserAvailability = {
    day1?: Date;
    day2?: Date;
    day3?: Date;
}
export type SectionDRef = {
    getAvailability: () => UserAvailability | undefined;
}

type SectionDProps = {
    defaultValue?: UserAvailability
}
const SectionD = forwardRef<SectionDRef, SectionDProps>(({defaultValue}, ref) => {
        const [availability, setReferal] = React.useState<UserAvailability | undefined>(defaultValue);
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
            getAvailability: () => availability
        }), [availability]);
        const shouldDisableDate = (date: dayjs.Dayjs | null) => {
            const ignoredDates = daysToIgnore(new Date(), new Date(new Date().getFullYear(), 11, 31));
            // if(availability?.day1){
            //     ignoredDates.push(dayjs(availability.day1));
            // }
            // if(availability?.day2){
            //     ignoredDates.push(dayjs(availability.day2));
            // }
            // if(availability?.day3){
            //     ignoredDates.push(dayjs(availability.day3));
            // }
            return ignoredDates.some((ignoredDate) => ignoredDate.isSame(date, 'day'));
          };


        return  <LocalizationProvider dateAdapter={AdapterDayjs}> 
       <motion.div 
        ref={ViewRef}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={gridVariants}
        >
          
          <Grid container spacing = {2}>
            <Grid item xs={12}>
                <motion.div variants={itemVariants} className="text-sm text-gray-400 text-center mb-5">
                Please select 3 dates you are available for a meeting (This is completly optional)
            </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
            <motion.div variants={itemVariants}>
            <DatePicker
            key = {availability?.day1?.toString()}
      label="Pick a date"
      minDate={dayjs()}
      maxDate={
        dayjs().endOf('year')
      }
      shouldDisableDate={shouldDisableDate}
        value={
            availability?.day1 ? dayjs(availability.day1) : null
        }
        onChange={(newValue) => {
            setReferal({...availability, day1: newValue?.toDate()})
        }}
    />
            </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
            <motion.div variants={itemVariants}>
            <DatePicker
            key = {availability?.day2?.toString()}
        label="Pick a date"
        minDate={dayjs()}
        maxDate={
            dayjs().endOf('year')
        }
        shouldDisableDate={shouldDisableDate}
        value={
            availability?.day2 ? dayjs(availability.day2) : null
        }
        onChange={(newValue) => {
            setReferal({...availability, day2: newValue?.toDate()})
        }}
        />
            </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
            <motion.div variants={itemVariants}>
            <DatePicker 
            key = {3}
        label="Pick a date"
        minDate={dayjs()}
        maxDate={
            dayjs().endOf('year')
        }
        shouldDisableDate={shouldDisableDate}
        value={
            availability?.day3 ? dayjs(availability.day3) : null
        }
        onChange={(newValue) => {
            setReferal({...availability, day3: newValue?.toDate()})
        }
        }
        />
            </motion.div>
            </Grid>
        </Grid>
        </motion.div>
        </LocalizationProvider>
    
})
SectionD.displayName = "SectionD";
export default SectionD;