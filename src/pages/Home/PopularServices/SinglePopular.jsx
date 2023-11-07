/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
const SinglePopular = ({ service }) => {

  const {user} = useAuth()

  const {
    _id,
    serviceUrl,
    serviceName,
    name,
    photo,
    price,
   
    description,
  } = service || {};
  return (
    <div> 
      <motion.div  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}   className="flex flex-col  p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-base-100">
        <div className="flex space-x-4 items-center">
          <img
            alt=""
            src={photo}
            className="object-cover w-12 h-12 rounded-full shadow bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <h1
              
              className="text-sm font-semibold"
            >
              {name}
            </h1>
          </div>
        </div>
        <div>
          <img
            src={serviceUrl}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500 rounded-xl"
          />
          <div className="flex justify-between">
            <h2 className="mb-1 text-xl font-semibold">{serviceName}</h2>
            <p>${price}</p>
          </div>
          <p className="text-sm text-gray-400">{description}</p>
          <Link to={ user ? `/single-service/${_id}`: "/login"}>
          <button className="btn bg-orange-400 hover:bg-orange-500 text-white my-2">View Details</button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default SinglePopular;
