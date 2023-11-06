import { motion } from 'framer-motion';

const HowWork = () => {
    return (
        <div className="py-8 bg-base-200 space-y-4 ">
            <h1 className="text-3xl font-medium text-center">How We Work</h1>

            <div className="flex flex-col lg:flex-row  gap-20 items-center w-[70%] mx-auto">

                <motion.div  whileHover={{ scale: 1.10, transition: { duration: 0.3 } }}  className="bg-base-300 h-[350px] w-[250px] space-y-5 p-10 rounded-xl">
                    <h1 className="text-2xl font-semibold">01</h1>
                    <h1 className="text-2xl font-bold">Identify</h1>
                    <p className="text-lg">We listen to your concerns and inspect your home to understand your goals before moving forward.</p>
                </motion.div>

                <motion.div  whileHover={{ scale: 1.10, transition: { duration: 0.3 } }}  className="bg-base-300 h-[340px] w-[250px] space-y-5 p-10 rounded-xl">
                    <h1 className="text-2xl font-semibold">02</h1>
                    <h1 className="text-2xl font-bold">Plan</h1>
                    <p className="text-lg">Once we have identified your needs, our expert team will create a detailed plan. </p>
                </motion.div>

                <motion.div  whileHover={{ scale: 1.10, transition: { duration: 0.3 } }}  className="bg-base-300 h-[340px] w-[250px] space-y-5 p-10 rounded-xl">
                    <h1 className="text-2xl font-semibold">03</h1>
                    <h1 className="text-2xl font-bold">Execute</h1>
                    <p className="text-lg">With a solid plan in place, our skilled professionals will execute the project efficiently.</p>
                </motion.div>
            </div>
        </div>
    );
};

export default HowWork;