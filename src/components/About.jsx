import { GiDuration } from "react-icons/gi";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center sm:text-5xl text-4xl">About
                <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent"> Me</span ></h2>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img width={500} className="rounded-2xl" src={aboutImg} alt="about" />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.5 }}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 ml-6">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About