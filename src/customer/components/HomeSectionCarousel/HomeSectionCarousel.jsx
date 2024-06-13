import React, { useEffect, useState } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../assets/carousel.css";
import { Button, Slide } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { mens_kurta } from "../../../data/mens_kurta";
let slidesToShow = 5;

const SlidePrev = (props) => {
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
         <Button
         onClick={onClick}
         variant="contained"
         className="z-50 bg-white"
         sx={{
           position: "absolute",
           top: "8rem",
           left: "0rem",
           transform: "translateX(-50%) rotate(-90deg)",
           bgcolor: "white",
         }}
         aria-label="next"
       >
         <KeyboardArrowLeftIcon
           sx={{
             transform: "rotate(90deg)",
             color: "black",
           }}
         />
       </Button>
      )}
    </>
  );
};

const SlideNext = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <Button
        variant="contained"
        className="z-50 bg-white"
        onClick={onClick}
        sx={{
          position: "absolute",
          top: "8rem",
          right: "0rem",
          transform: "translateX(50%) rotate(90deg)",
          bgcolor: "white",
        }}
        aria-label="next"
      >
        <KeyboardArrowLeftIcon
          sx={{
            transform: "rotate(90deg)",
            color: "black",
          }}
        />
      </Button>
      )}
    </>
  );
};

const carouselProperties = {
  prevArrow: <SlidePrev />,
  nextArrow: <SlideNext />,
  slidesToShow: slidesToShow,
  slidesToScroll: 1,
  infinite: false,
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const HomeSectionCarousel = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  if (width <= 426) {
    slidesToShow = 1;
  } else if (width > 426 && width <= 769) {
    slidesToShow = 3;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 4;
  } else {
    slidesToShow = 5;
  }


  return (
    <div style={{ margin: "30px" }} className="border p-5 lg:p-10">
      <Slider {...carouselProperties}>
        {mens_kurta.slice(0,10).map((item) => (
          <HomeSectionCard product={item} />
        ))}
      </Slider>
    </div>
  );
};

export default HomeSectionCarousel;
