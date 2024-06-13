import { Box, Stack, Typography } from "@mui/material"
import homeStyles from "./Home.Styles"
import Navbar from "../../components/navbar/Navbar"
import IconsSwiper from "../../components/swiper/Swiper"
import CardCarousel from "../../components/card_carousel/CardCarousel"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CopyrightIcon from '@mui/icons-material/Copyright';
import LanguageIcon from '@mui/icons-material/Language';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useEffect, useState } from "react"


const Home = () => {
    const [isTopContDisplaying, setIsTopContDisplaying] = useState<boolean>(true);


    useEffect(() => {
        const handleScroll = () => {
            console.log('Scrolled to:', window.scrollY);
            const fixedBodyElement = document.querySelector('.fixed-body');
            const stackEl = document.querySelector('.learn-stack');
            if (fixedBodyElement) {
                if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
                    // fixedBodyElement.classList.add("fixed-body");
                } else {
                    // fixedBodyElement.classList.remove("fixed-body");
                }
            }

            if (stackEl) {
                if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
                    // stackEl.classList.add("learn-stack");
                    document.getElementById("learn-stack")!.style.height = "0px";
                    // document.getElementById("learn-stack")!.style.display = "none";
                    setIsTopContDisplaying(false);
                    document.getElementById("learn-stack")!.style.padding = "0px";
                    // document.getElementById("learn-stack")!.style.display = "flex";
                    document.getElementById("fixed-body")!.style.top = "0px";
                } else {
                    setIsTopContDisplaying(true);
                    document.getElementById("learn-stack")!.style.padding = "18px 0px";
                    document.getElementById("learn-stack")!.style.display = "flex";
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box sx={homeStyles.mainContainer}>
            <Stack sx={homeStyles.stack} id="learn-stack" className="learn-stack">
                <Box sx={homeStyles.learnMore}>Learn more about icons</Box>
            </Stack>
            <Box sx={homeStyles.mainBody} id="fixed-body" className="fixed-body">
                <Navbar />
                <Stack direction={"column"} gap={3.5} marginTop={'19px'}>
                    <Box sx={homeStyles.cardsContainer}>
                        {Array.from({ length: 13 }).map((_, i) => <CardCarousel key={i} />)}
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={2}>
                        <Typography marginTop={1.5} sx={homeStyles.pastExperiences} width={"90%"} margin={"auto"}>Past experiences</Typography>
                        <Box sx={homeStyles.cardsContainer}>
                            {Array.from({ length: 13 }).map((_, i) => <CardCarousel key={i} />)}
                        </Box>
                    </Box>
                </Stack>
                <Box sx={homeStyles.footerContainer}>
                    <Box sx={homeStyles.footerChildContainer}>
                        <Typography sx={homeStyles.inspirationText}>Inspiration for future getaways</Typography>
                        <Box component="ul" sx={homeStyles.tabsUlContainer}>
                            {["Popular", "Arts & culture", "outdoors", "Mountains", "Beach", 'Unique stays', "Categories", "Things to do"].map(eachText => (<Box component="li" key={eachText} sx={homeStyles.tabLiText}>
                                {eachText}
                            </Box>))}
                        </Box>
                        <Box sx={homeStyles.tabsDataContainer}>
                            {Array.from({ length: 17 }).map((_, i) => (
                                <Box key={i} sx={homeStyles.tabDataContainer}>
                                    <Typography sx={homeStyles.locationText}>Canmore</Typography>
                                    <Typography sx={homeStyles.rentalsText}>Flat rentals</Typography>
                                </Box>))}
                            <Box sx={homeStyles.showMoreContainer}>
                                <Stack direction={"row"} alignItems={"flex-start"} gap={0.1}>
                                    <Box sx={homeStyles.showText}>
                                        Show more
                                    </Box>
                                    <KeyboardArrowRightIcon sx={homeStyles.arrowIcon} />
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                    <Box component={"hr"} sx={homeStyles.hrEle} marginBottom={0} />
                    <Box sx={homeStyles.footerChildContainerOne}>
                        <Box sx={homeStyles.gridContainer}>
                            <Box component="ul" sx={homeStyles.ulContainer}>
                                <Box component="li">
                                    Support
                                </Box>
                                <Box component="li">
                                    Help Centre
                                </Box>
                                <Box component="li">
                                    AirCover
                                </Box>
                                <Box component="li">
                                    Anti-discrimination
                                </Box>
                                <Box component="li">
                                    Disability support
                                </Box>
                                <Box component="li">
                                    Cancellation options
                                </Box>
                                <Box component="li">
                                    Report neighbourhood concern
                                </Box>
                            </Box>

                            <Box component="ul" sx={homeStyles.ulContainer}>
                                <Box component="li">
                                    Support
                                </Box>
                                <Box component="li">
                                    Help Centre
                                </Box>
                                <Box component="li">
                                    AirCover
                                </Box>
                                <Box component="li">
                                    Anti-discrimination
                                </Box>
                                <Box component="li">
                                    Disability support
                                </Box>
                                <Box component="li">
                                    Cancellation options
                                </Box>
                                <Box component="li">
                                    Report neighbourhood concern
                                </Box>
                            </Box>


                            <Box component="ul" sx={homeStyles.ulContainer}>
                                <Box component="li">
                                    Support
                                </Box>
                                <Box component="li">
                                    Help Centre
                                </Box>
                                <Box component="li">
                                    AirCover
                                </Box>
                                <Box component="li">
                                    Anti-discrimination
                                </Box>
                                <Box component="li">
                                    Disability support
                                </Box>
                                <Box component="li">
                                    Cancellation options
                                </Box>
                                <Box component="li">
                                    Report neighbourhood concern
                                </Box>
                            </Box>
                        </Box>

                        <Box component={"hr"} width={"90%"} margin={"auto"} sx={homeStyles.hrEle} />
                        <Box sx={homeStyles.footerBottomCont}>
                            <Box component="ul" sx={homeStyles.ulContainerOne}>
                                <Box component={"li"}>
                                    <CopyrightIcon />
                                    <Typography>2024 Airbnb, Inc.</Typography>
                                </Box>
                                <Box component={"li"}>
                                    Privacy
                                </Box>
                                <Box component={"li"}>
                                    Terms
                                </Box>
                                <Box component={"li"}>
                                    Sitemap
                                </Box>
                                <Box component={"li"}>
                                    Company details
                                </Box>
                            </Box>
                            <Stack direction={"row"} alignItems={"center"} gap={"20px"} sx={homeStyles.footerBottomStack}>
                                <Stack direction={"row"} alignItems={"center"} gap={"4px"}>
                                    <LanguageIcon />
                                    <Typography>English (IN)</Typography>
                                </Stack>
                                <Stack direction={"row"} alignItems={"center"} gap={"4px"}>
                                    <CurrencyRupeeIcon />
                                    <Typography>INR</Typography>
                                </Stack>
                                <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
                                    <FacebookIcon />
                                    <TwitterIcon />
                                    <InstagramIcon />
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    )

}


export default Home