/* eslint-disable react/prop-types */
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const MyServiceCard = ({ myService, myServices, setMyServices }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure to delete service?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://home-fix-server.vercel.app/add-services/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              const remaining = myServices.filter((item) => item._id !== id);
              setMyServices(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your service has been deleted.",
                icon: "success",
              });
            }
            console.log(res.data);
          });
      }
    });
  };

  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        className="flex flex-col  p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-base-100"
      >
        <div className="flex justify-between items-center">
          <div className="flex space-x-4  items-center">
            <img
              alt=""
              src={myService.photo}
              className="object-cover w-12 h-12 rounded-full shadow bg-gray-500 "
            />
            <div className="flex flex-col space-y-1">
              <h1 className="text-sm font-semibold">{myService.name}</h1>
            </div>
          </div>
          <p className="font-semibold">{myService.area}</p>
        </div>
        <div>
          <img
            src={myService.serviceUrl}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500 rounded-lg"
          />
          <div className="flex justify-between items-center">
            <h2 className="mb-1 text-xl font-semibold">
              {myService.serviceName}
            </h2>
            <p>${myService.price}</p>
          </div>
          <p className="text-sm text-gray-400">
            {myService.description.slice(0, 67)}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <Link to={`/update-service/${myService._id}`}>
            <button className="btn bg-orange-400 hover:bg-orange-500 text-white">
              Update Service
            </button>
          </Link>
          <button
            onClick={() => handleDelete(myService._id)}
            className="btn bg-red-400 hover:bg-red-500 text-white"
          >
            Delete Service
          </button>
        </div>
      </motion.div>
      <Toaster />
    </div>
  );
};

export default MyServiceCard;
