import { RiReactjsLine } from "react-icons/ri"
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { TbSql } from "react-icons/tb";

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <div className="my-20 text-center text-4xl font-bold bg-gradient-to-r from-cyan-400 via-yellow-100 to-red-800 bg-clip-text tracking-tight text-transparent">Technologies</div>
            <div className="flex flex-wrap flex-center justify-center gap-4 items-center">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-[rgb(97,219,251)]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className="text-7xl text-white " />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-[rgb(255,222,87)]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandReactNative className="text-7xl text-[rgb(97,219,251)] " />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbSql className="text-7xl text-red-500" />
                </div>
            </div>
            <p className="my-10 text-center text-xl font-light tracking-tight"><span className="font-bold bg-gradient-to-r from-cyan-100 via-yellow-100 to-red-200 bg-clip-text tracking-tight text-transparent" >Languages / Frameworks:</span> Oracle PL/SQL, SQL, Python, Java, HTML, CSS, JavaScript, React, Node.js,
            React Native, Keras, TensorFlow, Tailwind.</p>
            <p className="my-10 text-center text-xl font-light tracking-tight"><span className="font-bold bg-gradient-to-r from-cyan-100 via-yellow-50 to-red-100 bg-clip-text tracking-tight text-transparent">Skills:</span> Data Structures and Algorithms, Git/GitHub, DBMS, Machine Learning, ANN, CNN, Agile Practices,
            CI/CD, UI/UX design principles, Figma, Docker, Kubernetes.</p>
        </div>
    )
}

export default Technologies