import useAuth from "../../Hook/useAuth";
import RecentServices from "./RecentServices/RecentServices";
import SliderSlick from "./Slider/SliderSlick";
import Marquee from "react-fast-marquee";

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      {user && (
        <div className="mx-auto w-[55%]">
          <Marquee className="w-full">
            <h1 className="text-center my-4 ">
              Warm Welcome to Home-Fix,{" "}
              <span className="text-orange-400 font-semibold">
                {user.displayName}
              </span>
              . We are delighted to have you here.
            </h1>
          </Marquee>
        </div>
      )}
      <SliderSlick />
      <RecentServices />
    </div>
  );
};

export default Home;
