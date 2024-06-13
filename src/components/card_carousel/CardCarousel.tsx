/** @jsxImportSource @emotion/react */
import { Box, Stack, Typography } from "@mui/material"
import cardCarouselStyles from "./CardCarousel.Styles"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { cardImages } from "../../typescript/data";
import '../../App.css';



const CardCarousel = () => {
    return (
        <Box sx={cardCarouselStyles.cardMainContainer} className={"card-container"}>
            <Swiper
                navigation={true}
                loop={true}
                grabCursor={true}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination, Navigation, Parallax]}
                className="mySwiper"
                spaceBetween={5}
                slidesPerView={1}
        
            >
                {cardImages.map(eachImg => (<SwiperSlide style={{ width: "100%", height: "100%", borderRadius: "12px" }}>
                    <Box sx={cardCarouselStyles.imageContainer} key={eachImg.id}>
                        <Box component="img" src={eachImg.imageUrl} alt={`image-${eachImg.id}`} sx={cardCarouselStyles.image} />
                    </Box>
                </SwiperSlide>))}
            </Swiper>
            <Stack direction={"column"} gap={0} justifyContent={"center"} alignItems={"flex-start"}>
                <Typography sx={cardCarouselStyles.h1Text}>Train at the X-Mansion</Typography>
                <Typography sx={cardCarouselStyles.p1Text}>Hosted by Jubilee</Typography>
                <Typography sx={cardCarouselStyles.p1Text}><Box component="span" marginRight={1} sx={cardCarouselStyles.h1Text}>₹3,182</Box>per guest</Typography>
            </Stack>
        </Box>
    )
}


export default CardCarousel