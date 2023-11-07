import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import loginImg from "../../../src/assets/login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { googleLogin, signInUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        toast.success("User logged in Successfully.");
        navigate(location?.state ? location.state : "/");
        console.log(result.user);
      })
      .catch((error) => {
        toast.error(`${error.message}`);
        console.log(error.message);
      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        toast.success("User logged in Successfully.");
        navigate(location?.state ? location.state : "/");
        console.log(result.user);
      })
      .catch((error) => {
        toast.error(`${error.message}`);
        console.log(error.message);
      });
  };

  return (
    <div>
      <section className="flex flex-col md:flex-row-reverse h-screen items-center">
        <div className="w-1/2 ">
          <Lottie className="h-[90vh]" animationData={loginImg}></Lottie>
        </div>

        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
        >
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Log in to your account
            </h1>

            <form className="mt-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-orange-300 focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-orange-300
                focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-orange-400 "
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full block bg-orange-400 hover:bg-orange-500 focus:bg-orange-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
              >
                Log In
              </button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />

            <button
              onClick={handleGoogle}
              type="button"
              className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
              <div className="flex items-center justify-center hover:text-orange-400">
                <FcGoogle />
                <span className="ml-4">Log in with Google</span>
              </div>
            </button>

            <Link to="/register">
              <p className="mt-8">
                Need an account?{" "}
                <span className="text-blue-500 hover:text-orange-400 font-semibold">
                  Create an account
                </span>
              </p>
            </Link>
          </div>
        </div>
      </section>
      <Toaster />
      <Helmet>
      <title>Home-Fix | Login</title>
     </Helmet>
    </div>
  );
};

export default Login;
