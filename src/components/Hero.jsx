import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Naikaj.jpg";

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Naikaj Shiradkar</h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Software Developer</span>
                        <p className="my-2 max-w-xl py-6 ">{HERO_CONTENT}</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img className="rounded-2xl lg:mt-20 lg:pt-10 xl:mt-0 xl:pt-0" src = {profilePic} alt="Naikaj Shiradkar" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Hero