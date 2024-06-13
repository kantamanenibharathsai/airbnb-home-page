import {
    Box,
    IconButton,
    Stack,
    Switch,
    // SwitchProps,
    Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { styles } from "./Swiper.Styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { scrollImages } from "../../typescript/data";
import SurfingIcon from '@mui/icons-material/Surfing';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import { styled } from '@mui/material/styles';





const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 52,
    height: 38,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 0,
        padding: 0,
        transform: 'translateX(5px)',
        transitionDuration: '300ms',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(19px)',
            '& .MuiSwitch-thumb:before': {
                // backgroundColor: "#fff",
                content: "''",
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundColor: "",
                borderRadius: "50%",
                backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAADx8fH4+Pj8/Pze3t7k5OS8vLzQ0NCvr6/BwcGTk5Nra2upqalkZGTu7u4UFBTY2NggICDIyMiMjIyZmZmfn5+AgIAqKipTU1M7OztCQkJNTU0lJSV6enpXV1cxMTGDg4O1tbVfX19ycnI+Pj4QEBBpaWkvLy/mfjYmAAAFqklEQVR4nO2d2VoiQQyFLUDcBXFjU8FtfP8nHMFu2fpQNKSSSsx/q9+YWE4nfU5SHB05juM4juM4juPU5fJMOoLEnITw1pQOIiWNMONcOoyEjOcZhveWdCCpuAoF3RvpUNLQDgsupINJwnApwzBsS4dDz0VY5Uo6IGpuwjqDhnRMtPQ2MgzhVTooSp4rEgzh2k75v61M8Jtb6ciIaKIEw6V0aES8wQyNtDevMMFT6dBo6MAEH6VDI2KEEuxLR0bEAzzCY+nQaGjDBO+lQyNighIcSUdGxB08wo50aDScwgStaFJdlOCLdGREvMMjNNJzn8MEjQhuuOF+lw6NiBeUYNdIw30Gj9CImogbbitaImy4J9KREXEPj9CIVHoME3yQDo2IJ5TgQDoyIqbwCI3owLjhPpEOjYbWJ0rwWjo0Iv7BIzTScJ/ABI2ohw2Y4LN0aESMUYJP0pERcYUSdPVQC0OU4Id0ZESs2/ULjKiHm3Z9iZXJhCq7fo4V9bDarp9hpOGGdr2Vhtu+XX8NMzSiHrpdrx6367Vjv+H+Qgm6Xa8Et+vV43a9dtyuV88ftuvvpEMj4gMlOJGOjAi369UD1cOxdGRETOERmm+4jSxttWCCb9KhEXEJMzTScGO73shGmn27foAS7ElHRgS264003Fg9tDIfC5d9htKREYHteiMNt327HqqHVuZj3a7Xjtv16nG7Xj1wPtbteiXYt+v7KEG365Vg366HCVqx6/+wemjErsfqodv1SsDqoZGGGzczVux6uOwzkY6MCPPqoX27HqqHtHZ9Zyil1T3CI6RtuPtSD2asHtLa9fMLJCV6eGzX027XF08zAX+Vabv+t+0dc/fxTHb9UkvxyVuBmOz65spFE6zuAFQPae36tZ0iRiOZya7fcLPYZo6Y7PqK32OfSdviseurFS6W4s+jHiIrhMExZ7Lr4VZYenkEXhVEatfj277DKHEnzmPX41fPGUn9Hh67Hq8U/ZBwFpfJrscyc8GU8qetwGXX432GgkEitZLPro/9nYZekuLPade3oUhSkmLomHW7vgXb+xJ6wYvbrsdKUAH1MBK/XY93/AqIZTgBux53iCWUr2sidn0DGgcldDKclF2PK3AB2WMc/oTUdn20+BPJcILb9bgVLuhSyHCi2/VtuNBIF4Twdn0LruKUHFyv4PvoJ0UCOzCNpXigl4ArL5srhHv+gq9Din8W2/VJi38e2/UNGEbJ3oU5G7s++ua/Z/HPyK7HLzcFo72KM5NdvxNJij9+SZMYIOjADx8oqV38uez6nYGTdCU13SEuu74G+C1ur8iwXS83exgt/v0a/3/wPya5XY+f7iU7t1q5btc3oehXsqsNxmTX7wF+Xa11BDlv15MU/7y367FuVLDDAE7m2/UdqG6WxPw+XHdymY/d4hP/sP3lTsN2/Xan+JuXbVWbx64/EDxeV9DDf29K7uaMF3/UmmD1MLPt+njxr5bhNG3X4+GQbSGr+ux63JgUTDY78QzUwzpEi/9GD4bVw3RDHgfRgc1JyZoMp/Ay/GjxX5HhsJ2V8XZ9tPiPF08QXGKy3q6PDuAsZDioZmW+XR8fwClkuCn8hty36+MDOPO3PtXb9dEBnJkMB7+oYrs+OoDz1MDmR4bNTAVxDw6iZbs+PoADULRdj0XsbXDZ9SREB3CqyLLhhkQ9uE20bdfHi/8aX9IR1yY+gLNKLuphHaZ1EtS5XR/14BZovQx/9+Kv9m7OXYu/5svwox7cDN2fXR+V4YKWhhsSl+HUX4Yf8+AsXIa/VYYTt+tJ2DaAI2/Xk4A9uBzsehKQQJqHXU9Cq1rG19hwQ6o8uHzsehI2i39Odj0JG8VfbcMNWZu+zcyup2G5+Odn15OwVPyVN9yQXw9Ol3pYh6L4Z2rXkzAfwHmSjiItz1nb9SQ8ZG3XO47jOI7jOI5Dxn+5zkC4YMP1rgAAAABJRU5ErkJggg==/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="17" width="17" color="#000" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#000',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#222222' : '#000',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#222222' : '#B0B0B0',
        width: 22,
        height: 22,
        boxSizing: "border-box",
        position: "relative",
        top: "8px",
        left: 3,
        right: "17px",
        // right: "-5px",
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: "#fff",
            borderRadius: "50%",
            // backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="17" width="17" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            //     '#fff',
            // )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#222222' : '#B0B0B0',
        borderRadius: 26 / 2,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));



// const IOSSwitch = styled((props: SwitchProps) => (
//     <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
// ))(({ theme }) => ({
//     width: 42,
//     height: 26,
//     padding: 0,
//     '& .MuiSwitch-switchBase': {
//         padding: 0,
//         margin: 2,
//         transitionDuration: '300ms',
//         transform: 'translateX(22px)',
//         '&.Mui-checked': {
//             transform: 'translateX(22px)',
//             color: '#fff',
//             '& .MuiSwitch-thumb:before': {
//                 backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAACUCAMAAAAu5KLjAAAAYFBMVEX///8AAABSUlL7+/vp6en4+Pjy8vKcnJzf39/u7u7W1tbCwsL19fVZWVmTk5OysrKmpqaGhoZtbW0lJSUrKyvMzMwxMTFhYWFISEgREREZGRlycnI8PDyNjY18fHy6urrnMl2HAAAErElEQVR4nNWc63aiQBCEHQEvGBMFQTEa3/8tF1BkkOkaswpd+X7vOVsBpy/VPUwmbERhvNpsk/UhT49FURyP6S6da4t6ZDFPTuaRJNCW1SHI1j2JJVNtXV3ib5dIM/3QFtZhfnSqPIXawmwWzvdtTLrQVmYT79wqzUVbmc1GEMmlci6p/NRWZhFs/4LKiagy0VZmEYkq10ttbRbumF6SEwVM+XdpYm1tLUEiqsy0tVnIz/JLW1pL8COqPGtrs5CfZRJpa2s5iyp32tIs5GfJFIrEPG4KokMuv3GmQ/4lq9xqa2sR60tjfrS1tYBneeBp0C6yypwnk68KWSaPyjiVVW60xd2Jc1klT1MRAJUnGq9o2Tey2uPDc8inssqC5/jIxTpTjpSLIqYcKRdFxuxpjg9IPmZHU67Hbv/yykpbXUMIRPIcnxAETJ7i7eMAVK5n2vIa5I7cmCONb41CEY8NA6p1Y2hGaBlSOWWJ6+KUoiLVVncHHfKCJq6jqoinqwD2BtEQYIVUHlg8LdRG8rS7EcrkND/MQBjrXqEpOICjVTaSLNMpeHwMS8GxgCpZUvlsj1R+a8trEIeRFSlLJQyLN5oWLUN9JE3EnMC4fmCpMeHxOf6NHyZLVx5DlSxJMgKOsDEnbXkNsBKmiUWw4KCJRTOo8qAt70YE7PUySbK0FZ/wYf6NWMTSSS5xLPrv9HPZl6ynFuvk5zz/ysLofxIvmlW8tI15ER2eIvlcxb+z7tEU4MWZirTVW7Pbn3/Rs4SwK3912LcBA+5K6uXJHjCCddHrw74MWXsl0+f6K5x+3jGFhn1/Sb7yHyg4UjH5G1ROAvwkSr59+eMD/qnHN/lFGf6BlnnOE06Gf+U18MTXbNFRxebBG69/LKGvWwHKmwCe8vdahHB8U5GKM5xRKw7vQZJ04lf+9oY3g3mkpHA/GNiWm/cXmTH+D427S8BvYQjzDa3gXOk/zwUMZsPsR0TewNTTCfuKofxWv86Hc4Q9juE2ynwBtDvCW8DCZT3crlYELVTzcMMM/+NBZz8+ndbONx4EDHsdANxDuHJfrsWR4TC0R+jT2RQTOEsObxj5dP7U4VDdIwR3ea7UyQXXwqNYMbg2q98ozpLjeITYtaoWiGY4ZI6icuIrfEyO49ZoS7hws83HiFPJ0NPBA/ZjbjTjaRli3A0JXP7IjD1W8fZxTk6j7x740pGT8d3ryNu/9xktZFqEPt+mj8oiB9xsdKE0o8JmdY+T1iUQXzXfRW0N11eFdFDcisGOQYdUc0Pv+Z+n7iLUs1G+UFXp8dZbtNfYsYfZoP+NJa9JW6G/SPhMcmf46MHSq5Ljor43KnF8GMhnMbAsnOBRNMH5uQFbI567kui15zQPswzy8mtn2WqukTtNbWVdJMOGZUfvhmC272nux95wLxuxXFe549wpZNkrs3CVSkTBqGHWb+B4PiJh0StBdiy3aro8Nhwse5kPPIyDTmzBqKG7jU0W2Vs6qZ3mHm8fe1ZJF9lbonZ2sNfWgrjHeKYvlfVZNjeleWp2J83jpOh5AVeVDAYCpG7fduwPc7KsKhCqBsjNhuheGqKguf4D2aQ839cChCNZW/8ANkMzKsCUjLMAAAAASUVORK5CYII=')"
//             },
//             '& + .MuiSwitch-track': {
//                 backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#000',
//                 opacity: 1,
//                 border: 0,
//             },
//             '&.Mui-disabled + .MuiSwitch-track': {
//                 opacity: 0.5,
//             },
//         },
//         '&.Mui-focusVisible .MuiSwitch-thumb': {
//             color: '#33cf4d',
//             border: '6px solid #fff',
//         },
//         '&.Mui-disabled .MuiSwitch-thumb': {
//             color:
//                 theme.palette.mode === 'light'
//                     ? theme.palette.grey[100]
//                     : theme.palette.grey[600],
//         },
//         '&.Mui-disabled + .MuiSwitch-track': {
//             opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
//         },
//     },
//     '& .MuiSwitch-thumb': {
//         boxSizing: 'border-box',
//         width: 22,
//         height: 22,
//     },
//     '& .MuiSwitch-track': {
//         borderRadius: 26 / 2,
//         backgroundColor: theme.palette.mode === 'light' ? '#B0B0B0' : '#39393D',
//         opacity: 1,
//         transition: theme.transitions.create(['background-color'], {
//             duration: 500,
//         }),
//     },
// }));




const IconsSwiper = () => {
    const scrollContainer = useRef<HTMLDivElement | null>(null);
    let val = useRef(0);
    const [rightButton, setRightButton] = useState<boolean>(true);
    const [leftButton, setLeftButton] = useState<boolean>(false);
    const [activeListItem, setActiveListItem] = useState<number>(1);


    const handleScroll = (event: React.UIEvent<HTMLElement>) => {
        if (
            event.currentTarget.scrollLeft > 0 &&
            event.currentTarget.scrollLeft + event.currentTarget.clientWidth <
            event.currentTarget.scrollWidth - 10
        ) {
            setLeftButton(true);
            setRightButton(true);
        } else if (
            event.currentTarget.scrollLeft + event.currentTarget.clientWidth >=
            event.currentTarget.scrollWidth - 10
        ) {
            setRightButton(false);
            setLeftButton(true);
            val.current =
                event.currentTarget.scrollLeft + event.currentTarget.clientWidth;
        } else {
            setLeftButton(false);
            setRightButton(false);
        }

        if (event.currentTarget.scrollLeft === 0) {
            setLeftButton(false);
            setRightButton(true);
            val.current = 0;
        }
        val.current = event.currentTarget.scrollLeft;
    };

    const handleRight = () => {
        if (rightButton) {
            scrollContainer.current!.scrollLeft = val.current + 500;
            val.current += 500;
        }
    };

    const handleLeft = () => {
        if (leftButton) {
            scrollContainer.current!.scrollLeft = val.current - 500;
            val.current -= 500;
        }
    };

    const activeListItemHandler = (currentItemNum: number) => {
        setActiveListItem(currentItemNum + 1)
    }

    return (
        <Box sx={styles.mainContainer}>
            <Box sx={styles.childContainer}>
                <Box sx={styles.cardContainer}>
                    <Box
                        ref={scrollContainer}
                        sx={styles.ulContainer}
                        onScroll={handleScroll}
                        component="ul"
                    >
                        {scrollImages.map((item, index) => (
                            <Box
                                component="li"
                                sx={{ ...styles.listContainer, borderBottom: activeListItem - 1 === scrollImages.indexOf(item) ? "2px solid #000" : 0 }}
                                key={index}
                                onClick={() => activeListItemHandler(scrollImages.indexOf(item))}
                            >
                                <SurfingIcon sx={{ ...styles.IconImage, color: activeListItem - 1 === scrollImages.indexOf(item) ? "#000" : "#989898" }} />
                                <Typography
                                    sx={{ ...styles.text, color: activeListItem - 1 === scrollImages.indexOf(item) ? "#000" : "#989898" }}
                                >
                                    {item.text}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                    {leftButton && (
                        <IconButton sx={styles.leftButtonIcon} onClick={handleLeft}>
                            <ArrowBackIosIcon sx={styles.arrowIcon} />
                        </IconButton>
                    )}
                    {rightButton && (
                        <IconButton
                            sx={styles.rightButtonIcon}
                            id="rightButton"
                            onClick={handleRight}
                        >
                            <ArrowForwardIosIcon sx={styles.arrowIcon} />
                        </IconButton>
                    )}
                </Box>
                <Stack direction={"row"} alignItems={"center"} gap={0.5} sx={styles.filterStack}>
                    <FilterListOutlinedIcon />
                    <Typography>Filters</Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} gap={0.5} sx={styles.filterStack}>
                    <Typography width={"153px"}>Display total before taxes</Typography>
                    <MaterialUISwitch sx={{ m: 1 }} defaultChecked />
                </Stack>
            </Box >
        </Box>
    );
};

export default IconsSwiper;