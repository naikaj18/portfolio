import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Naikaj.jpg";
import { motion } from "framer-motion";

const container = (delay) =>({
    hidden: {x:-100,opacity:0},
    visible: {
        x:0, opacity:1, transition: {duration: 0.5, delay: delay}
    }
})

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                        variants={container(0)}
                        initial= "hidden"
                        animate ="visible"
                        className="pb-6 2xl:pb-20 text-6xl font-thin tracking-tight  lg:text-8xl ">Naikaj Shiradkar</motion.h1>
                        <motion.span variants={container(0.3)}
                        initial ="hidden"
                        animate ="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent 2xl:pb-10">Software Developer</motion.span>
                        <motion.p variants={container(0.5)}
                        initial ="hidden"
                        animate ="visible"
                        className="my-2 max-w-xl py-5 ">{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,delay:0.7}}className="rounded-2xl 2xl:mt-0 xl:mt-15 lg:ml-20 lg:mt-[120px] 2xl:ml-10  xl:mt-0 xl:pt-0" src = {profilePic} alt="Naikaj Shiradkar" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Hero