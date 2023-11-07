import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/add-services')
        .then(res=> setServices(res.data))
    },[])
    return (
        <div className="grid grid-cols-1 gap-8 w-1/2 mx-auto my-10">
            this is services page..{services.length}

            {
                services.map(service=> <ServiceCard key={service._id} service={service} />)
            }
        </div>
    );
};

export default Services;