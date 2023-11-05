import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const SliderSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="https://i.ibb.co/FhGfR7s/banner1.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/fqh954V/banner2.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/Fqwj2cR/banner3.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/5Fk2rsd/roofting.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/CwsBZ3y/kitchen-setup.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/Fzq0JJY/window-fix.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderSlick;