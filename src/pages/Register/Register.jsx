import { Link } from "react-router-dom";
import regImg from "../../../src/assets/register.json"
import Lottie from "lottie-react";



const Register = () => {


        const handleSubmit =e=>{
            e.preventDefault()
            const form = e.target
            const photo = form.photo.value
            const name = form.name.value
            const email = form.email.value
            const password = form.password.value
            const user = {email,password,photo,name}
            console.log(user)
        }
    return (
        <div>
        <section className="flex flex-col md:flex-row h-screen items-center">
          <div className="w-1/2 ">
              <Lottie className="h-[90vh]" animationData={regImg}></Lottie>
          </div>
  
          <div
            className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center"
          >
            <div className="w-full h-100">
              <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
                Register in  your account
              </h1>
  
              <form className="mt-6" onSubmit={handleSubmit}>

              <div>
                  <label className="block text-gray-700">Photo URL</label>
                  <input
                    type="text"
                    name="photo"
                   
                    placeholder="Enter Photo URL"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-orange-300 focus:bg-white focus:outline-none"
                    
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700">Your Name</label>
                  <input
                    type="text"
                    name="name"
                   
                    placeholder="Enter Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-orange-300 focus:bg-white focus:outline-none"
                    
                    required
                  />
                </div>

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
  
                
  
                <button
                  type="submit"
                  className="w-full block bg-orange-400 hover:bg-orange-500 focus:bg-orange-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
                >
                  Register
                </button>
              </form>
  
              <hr className="my-6 border-gray-300 w-full" />
  
              
  
              <Link to="/login">
              <p className="mt-8">
                Have an account?{" "}
                <span
                  className="text-blue-500 hover:text-orange-400 font-semibold"
                >
                  Log in now
                </span>
              </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Register;