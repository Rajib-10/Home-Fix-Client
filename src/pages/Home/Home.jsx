import useAuth from "../../Hook/useAuth";
import AskedQuestion from "./FAG/AskedQuestion";
import RecentServices from "./RecentServices/RecentServices";
import SliderSlick from "./Slider/SliderSlick";
import Marquee from "react-fast-marquee";
import Summaries from "./Summaries/Summaries";
import HowWork from "./HowWork/HowWork";
import PopularServices from "./PopularServices/PopularServices";

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
      <div className="max-w-[1230px] mx-auto">
      <SliderSlick />
      </div>
      <PopularServices />
      <RecentServices />
      <AskedQuestion />
     <HowWork />
     <Summaries />
    </div>
  );
};

export default Home;
