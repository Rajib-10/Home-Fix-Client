import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import axios from "axios";


const MyServices = () => {

    const {user}=useAuth()
    const [myServices,setMyServices] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/add-services?email=${user?.email}`)
        .then(res=> setMyServices(res.data))
    },[user])

    return (
        <div>
            this is my services...{myServices.length}
        </div>
    );
};

export default MyServices;