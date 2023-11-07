import { BsPeopleFill } from 'react-icons/bs';
import {HiBuildingOffice2} from 'react-icons/hi2'
import {FaAward} from 'react-icons/fa6'
import {IoCheckmarkDoneSharp} from 'react-icons/io5'
import CountUp from "react-countup";
import { motion } from 'framer-motion';


const Summaries = () => {
    return (
        <div className='py-8 bg-base-200'>
            <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} className='flex flex-col lg:flex-row  justify-between items-center lg:w-[90%] mx-auto bg-base-300 rounded-lg  p-8 gap-8'>
            <div className='flex items-center gap-7'>
                <div>
                    <BsPeopleFill className='text-6xl' />
                </div>
                <div>
                    <h1 className='text-3xl font-bold'><CountUp end={1100} duration={3} />+</h1>
                    <h1 className='text-xl font-bold'>Happy Customers</h1>
                </div>
            </div>

            <div className='flex items-center gap-7'>
                <div>
                    <HiBuildingOffice2 className='text-6xl' />
                </div>
                <div>
                    <h1 className='text-3xl font-bold'><CountUp end={20} duration={3} />+</h1>
                    <h1 className='text-xl font-bold'>Branch Offices</h1>
                </div>
            </div>

            <div className='flex items-center gap-7'>
                <div>
                    <IoCheckmarkDoneSharp className='text-6xl' />
                </div>
                <div>
                    <h1 className='text-3xl font-bold'><CountUp end={250} duration={3} />+</h1>
                    <h1 className='text-xl font-bold'>Projects Completed</h1>
                </div>
            </div>

            <div className='flex items-center gap-7'>
                <div>
                    <FaAward className='text-6xl' />
                </div>
                <div>
                    <h1 className='text-3xl font-bold'><CountUp end={35} duration={3} />+</h1>
                    <h1 className='text-xl font-bold'>Win Awards</h1>
                </div>
            </div>
        </motion.div>
        </div>
    );
};

export default Summaries;