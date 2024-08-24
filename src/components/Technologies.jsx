import { RiReactjsLine } from "react-icons/ri"
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { TbSql } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.div
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl font-bold bg-gradient-to-r from-cyan-400 via-yellow-100 to-red-800 bg-clip-text tracking-tight text-transparent">Technologies</motion.div>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap flex-center justify-center gap-4 items-center">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-[rgb(97,219,251)]" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className="text-7xl text-white " />
                </motion.div>
                <motion.div
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-[rgb(255,222,87)]" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandReactNative className="text-7xl text-[rgb(97,219,251)] " />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbSql className="text-7xl text-red-500" />
                </motion.div>
                <motion.p
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:60}}
                transition={{duration:1.5}}
                className="mt-10 text-center text-xl font-light tracking-tight"><span className="font-bold bg-gradient-to-r from-cyan-100 via-yellow-100 to-red-200 bg-clip-text tracking-tight text-transparent" >Languages / Frameworks:</span> Oracle PL/SQL, SQL, Python, Java, HTML, CSS, JavaScript, React, Node.js,
                    React Native, Keras, TensorFlow, Tailwind.</motion.p>
                <motion.p
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:60}}
                transition={{duration:1.5}}
                className="mt-10 text-center text-xl font-light tracking-tight"><span className="font-bold bg-gradient-to-r from-cyan-100 via-yellow-50 to-red-100 bg-clip-text tracking-tight text-transparent">Skills:</span> Data Structures and Algorithms, Git/GitHub, DBMS, Machine Learning, ANN, CNN, Agile Practices,
                   CI/CD, UI/UX design principles, Figma, Docker, Kubernetes.</motion.p>
            </motion.div>
        </div>
    )
}

export default Technologies