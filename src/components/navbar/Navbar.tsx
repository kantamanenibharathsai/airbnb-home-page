import { Box, Stack, Typography } from "@mui/material"
import navbarStyles from "./Navbar.Styles"
import airbnbLogo from "../../assets/airbnbLogo.png"
import smallLogo from "../../assets/smallLogo.png"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useEffect, useRef, useState } from "react";
import * as React from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { DateRange } from '@mui/x-date-pickers-pro/models';
import dayjs, { Dayjs } from 'dayjs';
import '../../App.css';
import IconsSwiper from "../swiper/Swiper";

const BasicDateRangeCalendar = () => {
    const [value, setValue] = React.useState<DateRange<Dayjs>>([
        dayjs('2022-04-17'),
        dayjs('2022-04-21'),
    ]);

    return (
        <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box className="custom-date-range-calendar">
                    <DemoContainer components={['DateRangeCalendar']}>
                        <DemoItem>
                            <DateRangeCalendar
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                                sx={{ justifyContent: "center" }}
                            />
                        </DemoItem>
                    </DemoContainer>
                </Box>
            </LocalizationProvider>
        </Box>
    );
};









const Navbar = () => {
    const [isDestinationCardOpen, setIsDestinationCardOpen] = useState<boolean>(false);
    const [isCheckInHovered, setIsCheckInHovered] = useState<boolean>(false);
    const [isCheckOutHovered, setIsCheckOutHovered] = useState<boolean>(false);
    const [isAddGuestHovered, setIsAddGuestHovered] = useState<boolean>(false);
    const [isCheckInClicked, setIsCheckInClicked] = useState<boolean>(false);
    const [isCheckOutClicked, setIsCheckOutClicked] = useState<boolean>(false);
    const [isAddGuestClicked, setIsAddGuestClicked] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const popupRef = useRef<HTMLDivElement>(null);
    const calendarRef = useRef<HTMLDivElement>(null);
    const addGuestRef = useRef<HTMLDivElement>(null);

    const destinationHandler = () => {
        setIsDestinationCardOpen(true);
        setIsCheckInClicked(false);
        setIsCheckOutClicked(false);
        setIsAddGuestClicked(false);
    }

    const checkInCalendarHandler = () => {
        setIsDestinationCardOpen(false);
        setIsCheckInClicked(true);
        setIsCheckOutClicked(false);
        setIsAddGuestClicked(false);
    }

    const checkOutCalendarHandler = () => {
        setIsDestinationCardOpen(false);
        setIsCheckInClicked(false);
        setIsCheckOutClicked(true);
        setIsAddGuestClicked(false);
    }

    const addGuestHandler = () => {
        setIsDestinationCardOpen(false);
        setIsCheckInClicked(false);
        setIsCheckOutClicked(false);
        setIsAddGuestClicked(true);
    }


    const handleClickOutside = (event: MouseEvent) => {
        if ((popupRef.current && !popupRef.current.contains(event.target as Node)) || (calendarRef.current && !calendarRef.current.contains(event.target as Node)) || (addGuestRef.current && !addGuestRef.current.contains(event.target as Node))) {
            setIsDestinationCardOpen(false);
            setIsCheckInClicked(false);
            setIsCheckOutClicked(false);
            setIsAddGuestClicked(false);
        }
    };

    useEffect(() => {
        if (isDestinationCardOpen || isCheckInClicked || isCheckOutClicked || isAddGuestClicked) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDestinationCardOpen, isCheckInClicked, isCheckOutClicked, isAddGuestClicked]);


    useEffect(() => {
        const handleScroll = () => {
            console.log('Scrolled to:', window.scrollY);
            if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
                setIsScrolled(true);
                document.getElementById("middleStack")!.style.display = "none";
                // document.getElementById("logo").style.fontSize = "25px";
                document.getElementById("middleStackOne")!.style.display = "flex";
                document.getElementById("navContainerTwo")!.style.display = "none";
            } else {
                setIsScrolled(false);
                document.getElementById("middleStack")!.style.display = "flex";
                // document.getElementById("navbar").style.padding = "80px 10px";
                // document.getElementById("logo").style.fontSize = "35px";
                document.getElementById("middleStackOne")!.style.display = "none";
                document.getElementById("navContainerTwo")!.style.display = "flex";
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleAddGuestMouseEnter = () => {
        setIsAddGuestHovered(true);
    };

    const handleAddGuestMouseLeave = () => {
        setIsAddGuestHovered(false);
    };

    const handleCheckInMouseEnter = () => {
        setIsCheckInHovered(true)
    }

    const handleCheckInMouseLeave = () => {
        setIsCheckInHovered(false)
    }

    const handleCheckOutMouseEnter = () => {
        setIsCheckOutHovered(true)
    }

    const handleCheckOutMouseLeave = () => {
        setIsCheckOutHovered(false)
    }

    return (
        <Box sx={{ ...(isScrolled && navbarStyles.fixedCont) }}>
            <Box sx={navbarStyles.container}>
                <Box sx={navbarStyles.childContainer}>
                    <Box component={"img"} src={airbnbLogo} alt="airbnb-logo" sx={navbarStyles.logo} display={{ sm: "none", lg: "inline" }} />
                    <Box component={"img"} src={smallLogo} alt="airbnb-logo" sx={{ ...navbarStyles.smallLogo }} display={{ sm: "inline", lg: "none" }} />
                    {/* <Box sx={navbarStyles.middleContainer}>
                    <Typography sx={navbarStyles.navText}>Anywhere</Typography>
                    <Box component={"hr"} sx={navbarStyles.hrElement} />
                    <Typography sx={navbarStyles.navText}>Any week</Typography>
                    <Box component={"hr"} sx={navbarStyles.hrElement} />
                    <Typography sx={navbarStyles.navText}>Add guests</Typography>
                    <Box sx={navbarStyles.searchBox}>
                        <SearchIcon sx={navbarStyles.searchIcon} />
                    </Box>
                </Box> */}
                    <Stack sx={navbarStyles.middleStack} id="middleStack">
                        <Typography sx={{ ...navbarStyles.navText, ...navbarStyles.staysText }}>Stays</Typography>
                        <Typography sx={{ ...navbarStyles.navText, ...navbarStyles.colorText }}>Experiences</Typography>
                        <Typography sx={{ ...navbarStyles.navText, ...navbarStyles.colorText }}>Online Experiences</Typography>
                    </Stack>

                    <Box sx={navbarStyles.navContainerTwoSmall} id="middleStackOne">
                        <Stack sx={{ ...navbarStyles.contentStack, textAlign: "left", width: "auto", px: "21px", }}>
                            <Typography sx={navbarStyles.nav2Head}>Anywhere</Typography>
                        </Stack>

                        <Stack sx={{ ...navbarStyles.contentStack, textAlign: "left", width: "auto", px: "21px", }}>
                            <Typography sx={navbarStyles.nav2Head}>Anyweek</Typography>
                        </Stack>

                        <Stack direction={"row"} gap={1.8} alignItems={"center"} justifyContent={"space-between"} sx={{ ...navbarStyles.contentStack, width: "auto", px: "21px", pr: "3px" }}>
                            <Typography sx={navbarStyles.nav2Head}>Add guests</Typography>
                            <Box component="button" sx={navbarStyles.searchBtnSmall}>
                                <SearchIcon sx={navbarStyles.searchIconSmall} />
                            </Box>
                        </Stack>
                    </Box>

                    <Box sx={navbarStyles.rightContainer}>
                        <Typography sx={navbarStyles.navText}>Airbnb your home</Typography>
                        <Box sx={navbarStyles.langIconContainer}>
                            <LanguageIcon sx={navbarStyles.langIcon} />
                        </Box>
                        <Box sx={{ ...navbarStyles.middleContainer, ...navbarStyles.iconsContainer }}>
                            <MenuIcon sx={navbarStyles.menuIcon} />
                            <AccountCircleRoundedIcon sx={navbarStyles.accountIcon} />
                        </Box>
                    </Box>
                </Box>

                <Box sx={navbarStyles.navContainerOne}>
                    <Stack sx={{ ...navbarStyles.middleStack, ...navbarStyles.middleStackOne }}>
                        <Typography sx={{ ...navbarStyles.navText, ...navbarStyles.staysText }}>Stays</Typography>
                        <Typography sx={{ ...navbarStyles.navText, ...navbarStyles.colorText }}>Experiences</Typography>
                        <Typography sx={{ ...navbarStyles.navText, ...navbarStyles.colorText }}>Online Experiences</Typography>
                    </Stack>
                </Box>

                <Box id="navContainerTwo" sx={{ ...navbarStyles.navContainerTwo, ...((isDestinationCardOpen || isCheckInClicked || isCheckOutClicked || isAddGuestClicked) && navbarStyles.activeBackgroundCont2) }}>
                    <Box sx={navbarStyles.firstContainer}>
                        <Box sx={{ ...navbarStyles.backgroundCont, ...(isDestinationCardOpen && navbarStyles.activeBackgroundCont), }} onClick={destinationHandler}>
                            <Stack direction={"column"} gap={0} alignItems={"flex-start"} width={"100%"} sx={{ ...navbarStyles.contentStack, borderRight: isDestinationCardOpen || isCheckInHovered ? "0px" : "1px solid #EBEBEB" }}>
                                <Typography sx={navbarStyles.nav2Head}>Where</Typography>
                                <Typography sx={{ ...navbarStyles.nav2Text }}>Search destinations</Typography>
                            </Stack>
                        </Box>
                        <Box sx={navbarStyles.backgroundCont1}>
                            <Box sx={{ ...navbarStyles.backgroundCont2, ...(isCheckInClicked && navbarStyles.activeBackgroundCont) }}
                                onMouseEnter={handleCheckInMouseEnter}
                                onMouseLeave={handleCheckInMouseLeave}
                                onClick={checkInCalendarHandler}
                            >
                                <Stack direction={"column"} gap={0} alignItems={"flex-start"} justifyContent={"center"} sx={{ ...navbarStyles.contentStack, borderRight: isCheckOutHovered ? 0 : "1px solid #EBEBEB", }}>
                                    <Typography sx={navbarStyles.nav2Head}>Check in</Typography>
                                    <Typography sx={{ ...navbarStyles.nav2Text }}>Add dates</Typography>
                                </Stack>
                            </Box>

                            <Box onMouseEnter={handleCheckOutMouseEnter}
                                // display: isAddGuestClicked ? "none" : "block" 
                                onMouseLeave={handleCheckOutMouseLeave} sx={{ ...navbarStyles.backgroundCont2, ...(isCheckOutClicked && navbarStyles.activeBackgroundCont), }} onClick={checkOutCalendarHandler}>
                                <Stack direction={"column"} gap={0} alignItems={"flex-start"} justifyContent={"center"} sx={{ ...navbarStyles.contentStack, borderRight: (isAddGuestHovered || isAddGuestClicked) ? 0 : "1px solid #EBEBEB", }}>
                                    <Typography sx={navbarStyles.nav2Head}>Check out</Typography>
                                    <Typography sx={{ ...navbarStyles.nav2Text }}>Add dates</Typography>
                                </Stack>
                            </Box>
                        </Box>
                        {isDestinationCardOpen && <Box sx={navbarStyles.regionCard} ref={popupRef}>

                        </Box>}
                    </Box>
                    <Box onMouseEnter={handleAddGuestMouseEnter}
                        onMouseLeave={handleAddGuestMouseLeave}
                        onClick={addGuestHandler}
                        sx={{ ...navbarStyles.backgroundCont, ...navbarStyles.widthCont, ...(isAddGuestClicked && navbarStyles.activeBackgroundCont) }} justifyContent={"space-between"} paddingRight={1}>
                        <Stack direction={"column"} gap={0.3} alignItems={"flex-start"}>
                            <Typography sx={navbarStyles.nav2Head}>Who</Typography>
                            <Typography sx={{ ...navbarStyles.nav2Text }}>Add guests</Typography>
                        </Stack>
                        {!(isDestinationCardOpen || isCheckInClicked || isCheckOutClicked || isAddGuestClicked) && <Box sx={navbarStyles.searchContainer}>
                            <SearchIcon sx={navbarStyles.searchIcon} />
                        </Box>}
                        {(isDestinationCardOpen || isCheckInClicked || isCheckOutClicked || isAddGuestClicked) && <Box component="button" sx={navbarStyles.searchBtn}>
                            <SearchIcon sx={navbarStyles.searchIcon} />
                            <Box component="span">Search</Box>
                        </Box>}
                    </Box>
                    {(isCheckInClicked || isCheckOutClicked) && (<Box sx={navbarStyles.calendarContainer} ref={calendarRef}>
                        <Stack direction={"column"} alignItems={"center"} justifyContent={"center"} gap={2}>
                            <BasicDateRangeCalendar />
                        </Stack>
                    </Box>)}


                    {isAddGuestClicked && (
                        <Box sx={navbarStyles.addGuestCard} ref={addGuestRef}>
                            <Box component="ul" sx={navbarStyles.addGuestUl}>
                                <Box component="li" sx={navbarStyles.addGuestLi}>
                                    <Stack>
                                        <Typography sx={{ ...navbarStyles.navText, ...navbarStyles.staysText, ...navbarStyles.sizeText }}>Adults</Typography>
                                        <Typography sx={{ ...navbarStyles.navText, ...navbarStyles.colorText, ...navbarStyles.sizeText }}>Ages 13 or above</Typography>
                                    </Stack>
                                    <Stack direction={"row"} alignItems={"center"} gap={1.3}>
                                        <Box component="button" sx={navbarStyles.minusBtn}>-</Box>
                                        <Typography sx={{ ...navbarStyles.navText, ...navbarStyles.staysText, ...navbarStyles.numText }}>0</Typography>
                                        <Box component="button" sx={navbarStyles.plusBtn}>+</Box>
                                    </Stack>
                                </Box>

                                <Box component="li" sx={navbarStyles.addGuestLi}>
                                    <Stack>
                                        <Typography sx={{ ...navbarStyles.navText, ...navbarStyles.staysText, ...navbarStyles.sizeText }}>Adults</Typography>
                                        <Typography sx={{ ...navbarStyles.navText, ...navbarStyles.colorText, ...navbarStyles.sizeText }}>Ages 13 or above</Typography>
                                    </Stack>
                                    <Stack direction={"row"} alignItems={"center"} gap={1.3}>
                                        <Box component="button" sx={navbarStyles.minusBtn}>-</Box>
                                        <Typography sx={{ ...navbarStyles.navText, ...navbarStyles.staysText, ...navbarStyles.numText }}>0</Typography>
                                        <Box component="button" sx={navbarStyles.plusBtn}>+</Box>
                                    </Stack>
                                </Box>

                                <Box component="li" sx={navbarStyles.addGuestLi}>
                                    <Stack>
                                        <Typography sx={{ ...navbarStyles.navText, ...navbarStyles.staysText, ...navbarStyles.sizeText }}>Adults</Typography>
                                        <Typography sx={{ ...navbarStyles.navText, ...navbarStyles.colorText, ...navbarStyles.sizeText }}>Ages 13 or above</Typography>
                                    </Stack>
                                    <Stack direction={"row"} alignItems={"center"} gap={1.3}>
                                        <Box component="button" sx={navbarStyles.minusBtn}>-</Box>
                                        <Typography sx={{ ...navbarStyles.navText, ...navbarStyles.staysText, ...navbarStyles.numText }}>0</Typography>
                                        <Box component="button" sx={navbarStyles.plusBtn}>+</Box>
                                    </Stack>
                                </Box>

                                <Box component="li" sx={navbarStyles.addGuestLi}>
                                    <Stack>
                                        <Typography sx={{ ...navbarStyles.navText, ...navbarStyles.staysText, ...navbarStyles.sizeText }}>Adults</Typography>
                                        <Typography sx={{ ...navbarStyles.navText, ...navbarStyles.colorText, ...navbarStyles.sizeText }}>Ages 13 or above</Typography>
                                    </Stack>
                                    <Stack direction={"row"} alignItems={"center"} gap={1.3}>
                                        <Box component="button" sx={navbarStyles.minusBtn}>-</Box>
                                        <Typography sx={{ ...navbarStyles.navText, ...navbarStyles.staysText, ...navbarStyles.numText }}>0</Typography>
                                        <Box component="button" sx={navbarStyles.plusBtn}>+</Box>
                                    </Stack>
                                </Box>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
            <IconsSwiper />
        </Box>
    )
}


export default Navbar