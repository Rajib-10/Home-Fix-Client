/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const RestServiceCard = ({ restService }) => {
  return (
    <div>
     <Link to={`/single-service/${restService._id}`}>
     <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
          <img
            src={restService.serviceUrl}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {restService.serviceName}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              ${restService.price}
            </p>
          </div>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
            {restService.description}
          </p>
        </div>
      </div>
     </Link>
    </div>
  );
};

export default RestServiceCard;
