/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Navbar, { NavBarHeight } from "../../components/navbar";
import { useThemeChanger } from "../../providers/ThemeChangerProvider";
import { Box, Button, Card, CardContent, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import SectionA, { SectionARef, UserDetails } from "./SectionA";
import { CTAButton } from "../../components/cta_button";
import Footer from "../../components/footer";
import Head from "next/head";
import { Alignment, Column, Row } from "ruki-react-layouts";
import { title } from "process";
import SectionB, { SectionBRef, UserProjectInfo } from "./sectionB";
import SectionC, { SectionCRef, UserReferal } from "./sectionC";
import SectionD, { SectionDRef, UserAvailability } from "./sectionD";
import { RiCalendar2Fill, RiCheckDoubleFill, RiClipboardFill, RiPriceTag2Fill, RiUser2Fill } from "react-icons/ri";
import { EmailService } from "../services/email-service";
import { useSnackbar } from "notistack";

const ContactPage = () => {
    const [active, setActive] = useState(0);
    const { themeData, updateTheme } = useThemeChanger();
    const {enqueueSnackbar} = useSnackbar();
    const {sendEmail} = EmailService();
    const sectionARef = React.useRef<SectionARef>(null);
    const SectionBRef = React.useRef<SectionBRef>(null);
    const SectionCRef = React.useRef<SectionCRef>(null);
    const SectionDRef = React.useRef<SectionDRef>(null);
    const topPageRef = React.useRef<HTMLDivElement>(null);
    const sectionsRef = React.useRef<HTMLDivElement[]>();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showSubmitDialog, setShowSubmitDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [visibleSummary, setVisibleSummary] = useState({
        sectionARef: false,
        SectionBRef: false,
        SectionCRef: false,
        SectionDRef: false
    });
    const [sectionValues, setSectionValues] = useState<{
        sectionA: UserDetails;
        sectionB: UserProjectInfo;
        sectionC: UserReferal;
        sectionD?: UserAvailability;
    }>({
        sectionA: {
            companyName: "",
            companyWebsite: "",
            email: "",
            name: "",
            phone: ""
        },
        sectionB: {
            budget: "",
            summary: "",
        },
        sectionC: {
            referal: "",
        },
    });

    const steps = [
        {
            title: "Tell us About yourself or your company",
            content: <SectionA defaultValue={
                sectionValues.sectionA
            } ref={sectionARef} />
        },
        {
            title: "How can we help you?",
            content: <SectionB defaultValue={
                sectionValues.sectionB
            } ref={SectionBRef}
            />
        },
        {
            title: "Where did you hear about us?",
            content: <SectionC defaultValue={sectionValues.sectionC} ref={SectionCRef}/>
        },
        {
            title: "If you would like to schedule a meeting, please select your availability",
            content: <SectionD ref={SectionDRef} defaultValue={sectionValues.sectionD}/>
        }
    ]
    useEffect(() => {
        updateTheme("light");
    }, [])
    const handleNext = () => {
        setSectionValues({
            sectionA: sectionARef.current?.getSummary() ?? sectionValues.sectionA,
            sectionB: SectionBRef.current?.getProjectInfo() ?? sectionValues.sectionB,
            sectionC: SectionCRef.current?.getReferalData() ?? sectionValues.sectionC,
            sectionD: SectionDRef.current?.getAvailability() ?? sectionValues.sectionD
        });
        setVisibleSummary({
            sectionARef: active >= 0,
            SectionBRef: active >= 1,
            SectionCRef: active >= 2,
            SectionDRef: active >= 3
        })
        sectionsRef?.current?.[active].scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        if(active === steps.length - 1){
            setShowConfirmation(true);
            return;
        }
        setActive((prev) => prev + 1);
    }
    const handlePrev = () => {
        sectionsRef?.current?.[
            Math.max(0, active - 1)
        ].scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        setActive((prev) => prev - 1);
    }
    const handleReset = () => {
        setActive(0);
        setShowConfirmation(false);
    }
    const handleSubmitContactForm = () => {
        setLoading(true);
        sendEmail({
            to: process.env.NEXT_PUBLIC_EMAIL_LIST ?? "",
            subject: "RUKI | New Contact Form Submission | " + new Date().toLocaleDateString(),
            html: `
            <h1>New Contact Form Submission</h1>
            <h2>Personal Information</h2>
            <ul>
                <li><strong>Name:</strong> ${sectionValues.sectionA.name}</li>
                <li><strong>Email:</strong> ${sectionValues.sectionA.email}</li>
                <li><strong>Phone:</strong> ${sectionValues.sectionA.phone}</li>
                <li><strong>Company:</strong> ${sectionValues.sectionA.companyName}</li>
                <li><strong>Website:</strong> ${sectionValues.sectionA.companyWebsite}</li>
            </ul>
            <h2>Project Information</h2>
            <ul>
                <li><strong>Summary:</strong> ${sectionValues.sectionB.summary}</li>
                <li><strong>Budget:</strong> ${sectionValues.sectionB.budget}</li>
            </ul>
            <h2>Referal Information</h2>
            <ul>
                <li><strong>Referal:</strong> ${sectionValues.sectionC.referal}</li>
            </ul>
            <h2>Availability</h2>
            <ul>
                <li><strong>Day 1:</strong> ${sectionValues.sectionD?.day1?.toLocaleDateString() ?? "N/A"}</li>
                <li><strong>Day 2:</strong> ${sectionValues.sectionD?.day2?.toLocaleDateString() ?? "N/A"}</li>
                <li><strong>Day 3:</strong> ${sectionValues.sectionD?.day3?.toLocaleDateString() ?? "N/A"}</li>
            </ul>
            `,
            onSuccess: () => {
                setShowConfirmation(false);
                setShowSubmitDialog(true);
                setLoading(false);
                enqueueSnackbar("Form sent successfully", {
                    variant: "success"
                });
            },
            onFailure: (error) => {
                console.log(error);
                setShowConfirmation(false);
                setLoading(false);
                enqueueSnackbar("Failed to send, try again later", {
                    variant: "error"
                });
            }
        })
    }
    const BuildSummary = ({index}: {index: number}) => {
        let summary = <></>
        switch (index) {
            case 0:
                if(visibleSummary.sectionARef)
                summary = <>
                    <strong>Name:</strong> {sectionValues.sectionA.name ?? "N/A"}
                    <br />
                    <strong>Email:</strong> {sectionValues.sectionA.email ?? "N/A"}
                    <br />
                    <strong>Phone:</strong> {sectionValues.sectionA.phone ?? "N/A"}
                    <br />
                    <strong>Company:</strong> {sectionValues.sectionA.companyName ?? "N/A"}
                    <br />
                    <strong>Website:</strong> {sectionValues.sectionA.companyWebsite ?? "N/A"}
                </>
            break;
            case 1:
                if(visibleSummary.SectionBRef)
                summary = <>
                    <strong>Summary:</strong> {sectionValues.sectionB.summary ?? "N/A"}
                    <br />
                    <strong>Budget:</strong> {sectionValues.sectionB.budget ?? "N/A"}
                </>
            break;
            case 2:
                if(visibleSummary.SectionCRef)
                summary = <>
                    <strong>Referal:</strong> {sectionValues.sectionC.referal ?? "N/A"}
                </>
            break;
            case 3:
                if(visibleSummary.SectionDRef)
                summary = <>
                    <strong>Day 1:</strong> {sectionValues.sectionD?.day1?.toLocaleDateString() ?? "N/A"}
                    <br />
                    <strong>Day 2:</strong> {sectionValues.sectionD?.day2?.toLocaleDateString() ?? "N/A"}
                    <br />
                    <strong>Day 3:</strong> {sectionValues.sectionD?.day3?.toLocaleDateString() ?? "N/A"}
                </>
            default:
                break;
        }
        return <div className="text-gray-600 text-xs mt-2  mr-3 rounded bg-[#fbfbfc] p-2">
            {summary}
        </div>
    }
    return (
        <>
            <Head>
                <title>Reach out to RUKI</title>
                <meta name="description" content="Where to find us" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div ref={topPageRef} style={{ width: "100vw", backgroundColor: themeData.colors.background.default, paddingTop: NavBarHeight + 20 }}>
                <div style={{ maxWidth: themeData.breakpoints.desktop, height: "100%", margin: "0 auto", marginTop: "10%", padding: 20 }}>
                    <Stepper activeStep={active} orientation="vertical">
                        {
                            steps.map((step, index) => (
                                <Step key={index} title={step.title}>
                                    <StepLabel>
                                        <div ref={
                                            (el) => {
                                                if (!sectionsRef.current) {
                                                    sectionsRef.current = [];
                                                }
                                                if (el) {
                                                    sectionsRef.current[index] = el;
                                                }
                                            }
                                        } className="font-bold text-black text-xl leading-[1.1] text-left">
                                            {step.title}
                                        </div>
                                        {
                                            active !== index ? <BuildSummary index = {index} />: null
                                        }
                                    </StepLabel>
                                    <StepContent style={{ padding: 30 }}>
                                        {step.content}
                                        <Row alignment={Alignment.left} crossAlignment={Alignment.right} style={{
                                            marginTop: 20
                                        }}>
                                            <CTAButton
                                                text={index === steps.length - 1 ? 'Finish' : 'Continue'}
                                                onClick={handleNext}
                                            />
                                            <Button
                                                disabled={index === 0}
                                                onClick={handlePrev}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                Back
                                            </Button>
                                        </Row>
                                    </StepContent>
                                </Step>
                            ))
                        }
                    </Stepper>
                </div>

                <Footer />

            </div>
            <Navbar pageNo={2} />
            <Dialog open={showConfirmation} >
                <DialogTitle><div className="font-bold text-xl">
                                Thank you for reaching out to us. Please verify the information below.
                            </div></DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Card variant="outlined" className="h-full">
                                <CardContent>
                                    <Column>
                                        <div className="font-bold text-md flex flex-row justify-center items-center bg-clip-text bg-gradient-to-tr from-rukipurple via-rukiblue to-rukiblue">
                                         <RiUser2Fill className="mr-2"/>  Personal Information
                                        </div>
                                        <Divider />
                                        <Column className="text-sm text-gray-500 mt-3">
                                            <strong>Name:</strong> {sectionValues.sectionA.name ?? "N/A"}
                                            <br />
                                            <strong>Email:</strong> {sectionValues.sectionA.email ?? "N/A"}
                                            <br />
                                            <strong>Phone:</strong> {sectionValues.sectionA.phone ?? "N/A"}
                                            <br />
                                            <strong>Company:</strong> {sectionValues.sectionA.companyName ?? "N/A"}
                                            <br />
                                            <strong>Website:</strong> {sectionValues.sectionA.companyWebsite ?? "N/A"}
                                        </Column>
                                    </Column>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card variant="outlined" className="h-full">
                                <CardContent>
                                    <Column>
                                        <div className="font-bold text-md flex flex-row justify-center items-center">
                                        <RiClipboardFill className="mr-2"/>  Project Information
                                        </div>
                                        <Divider />
                                        <Column className="text-sm text-gray-500 mt-3">
                                            <strong>Summary:</strong> {sectionValues.sectionB.summary ?? "N/A"}
                                            <br />
                                            <strong>Budget:</strong> {sectionValues.sectionB.budget ?? "N/A"}
                                        </Column>
                                    </Column>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card variant="outlined" className="h-full">
                                <CardContent>
                                    <Column>
                                        <div className="font-bold text-md flex flex-row justify-center items-center">
                                         <RiPriceTag2Fill className="mr-2"/>   Referal Information
                                        </div>
                                        <Divider />
                                        <Column className="text-sm text-gray-500 mt-3">
                                            <strong>Referal:</strong> {sectionValues.sectionC.other ?? sectionValues.sectionC.referal ?? "N/A"}
                                        </Column>
                                    </Column>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card variant="outlined" className="h-full">
                                <CardContent>
                                    <Column>
                                        <div className="font-bold text-md flex flex-row justify-center items-center">
                                          <RiCalendar2Fill className="mr-2"/>   Availability
                                        </div>
                                        <Divider />
                                        <Column className="text-sm text-gray-500 mt-3">
                                            <strong>Day 1:</strong> {sectionValues.sectionD?.day1?.toLocaleDateString() ?? "N/A"}
                                            <br />
                                            <strong>Day 2:</strong> {sectionValues.sectionD?.day2?.toLocaleDateString() ?? "N/A"}
                                            <br />
                                            <strong>Day 3:</strong> {sectionValues.sectionD?.day3?.toLocaleDateString() ?? "N/A"}
                                        </Column>
                                    </Column>
                                </CardContent>
                            </Card>
                            </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button className="text-gray-500" style={{textTransform: "capitalize"}} onClick={handleReset}>Reset</Button>
                    {loading ? <CircularProgress size={"small"}/>  : <CTAButton text={"Submit"} onClick={() => {
                       
                        handleSubmitContactForm();
                    }}/>}
                </DialogActions>
            </Dialog>
            <Dialog open={showSubmitDialog}>
                <DialogContent>
                    <Column alignment={Alignment.center} crossAlignment={Alignment.center}>
                        <RiCheckDoubleFill className="text-6xl text-green-500"/>
                        <Typography variant="h5" className="text-center font-bold mt-3">
                            Your query has been submitted successfully
                        </Typography>
                        <Typography variant="caption" className="text-center m-3 max-w-[65%]">
                            We will get back to you as soon as possible with a response. please allow up to 3-5 business days for a response.
                        </Typography>
                        <CTAButton text="Close" onClick={() => {
                            setShowSubmitDialog(false);
                            setSectionValues({
                                sectionA: {
                                    companyName: "",
                                    companyWebsite: "",
                                    email: "",
                                    name: "",
                                    phone: ""
                                },
                                sectionB: {
                                    budget: "",
                                    summary: "",
                                },
                                sectionC: {
                                    referal: "",
                                },
                            });
                            setVisibleSummary({
                                sectionARef: false,
                                SectionBRef: false,
                                SectionCRef: false,
                                SectionDRef: false
                            });
                            topPageRef.current?.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                            handleReset();
                        }}/>

                    </Column>
                </DialogContent>
            </Dialog>
        </>
    )
}
export default ContactPage;