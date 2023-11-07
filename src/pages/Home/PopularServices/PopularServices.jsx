import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SinglePopular from "./SinglePopular";


const PopularServices = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/add-services`)
        .then(res=> setServices(res.data))
    },[])

    // serviceUrl,serviceName,name,email,photo,price,area,description
    return (
        
        <div className="space-y-4">
        <h1 className="text-orange-500 text-center text-3xl font-medium">Popular Services</h1>
        <p className="text-center">Popular Services We have Provided</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] mx-auto">
      {
        services.slice(0,4).map(service=> <SinglePopular key={service._id} service={service} ></SinglePopular>)
       }
      </div>
        <div className="text-center">
        <Link to="/services">
            <button className="btn bg-orange-400 hover:bg-orange-500 text-white mb-8">Show All</button>
        </Link>
        </div>
    </div>
    );
};

export default PopularServices;