import Lottie from "lottie-react";
import img from "../../../src/assets/404.json";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Error = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] text-center md:my-10">
      <div>
        <Lottie animationData={img} />
        <Link to="/">
          <button
            type="button"
            className=" px-8 py-3 font-semibold rounded dark:bg-orange-400 text-white hover:bg-orange-500 "
          >
            Back Home
          </button>
        </Link>
      </div>
      <Helmet>
      <title>Home-Fix | 404</title>
     </Helmet>
    </div>
  );
};

export default Error;
