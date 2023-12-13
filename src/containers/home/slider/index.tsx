import "./style.css";
import React from "react";
import Slider from "react-slick";
import Image1 from "src/assets/images/main/image1.png";

type dataType = {
  id: number;
  image: any;
}[];

function SliderMain() {
  let data: dataType = [
    {
      id: 1,
      image: Image1,
    },
    {
      id: 2,
      image: Image1,
    },
    {
      id: 3,
      image: Image1,
    },
    {
      id: 4,
      image: Image1,
    },
    {
      id: 5,
      image: Image1,
    },
    {
      id: 6,
      image: Image1,
    },
    {
      id: 7,
      image: Image1,
    },
  ];

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="slider__main">
      <div className="container">
        <Slider {...settings}>
          {data.map((d: any) => (
            <div className="slider" key={d.id}>
              <img src={d.image} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default SliderMain;
