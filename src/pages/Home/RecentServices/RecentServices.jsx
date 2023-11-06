import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

const RecentServices = () => {
    const [recentWorks,setRecentWorks] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/recent-services')
        .then(res=>res.json())
        .then(data=> setRecentWorks(data))
    },[])
    return (
        <div className="space-y-4">
            <h1 className="text-orange-500 text-center text-3xl font-medium">Recent Services</h1>
            <p className="text-center">Discover our latest home improvement and repair services, designed to make your life easier and your home better</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-[90%] mx-auto">
                {
                    recentWorks?.map(recentWork=> <div className="my-6" key={recentWork._id}>

<motion.div  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}  className=" p-4 shadow-md bg-base-100 text-black rounded-lg">
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={recentWork.service_image} alt="" className="  w-full rounded-md h-72 dark:bg-gray-500" />
			
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold ">{recentWork.service_name}</h3>
			</a>
			<p className=" dark:text-gray-400">{recentWork.date}</p>
		</div>
	</div>
</motion.div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default RecentServices;