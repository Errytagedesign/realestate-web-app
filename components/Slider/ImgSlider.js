import { useContext } from "react";
import Image from "next/image";
import Slider from "react-slick";

import { Wrapper, Content } from "./ImgSliderstyles";

function ImgSlider({ data }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Slider
        className="slideCon d-flex flex-row justify-content-center"
        {...settings}
      >
        {data.map((image) => (
          <section
            key={image.id}
            className="slideImg col-10 d-flex  flex-row justify-content-around "
          >
            {" "}
            <Image
              placeholder="blur"
              blurDataURL={image.url}
              itemID={image.id}
              alt="property"
              src={image.url}
              width={1200}
              height={700}
            />
          </section>
        ))}

        {/* <section className="slideImg">
          {" "}
          <h3>Test1</h3>{" "}
        </section> */}
      </Slider>
    </Wrapper>
  );
}

export default ImgSlider;
