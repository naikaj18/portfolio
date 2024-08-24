import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-12" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <a href="https://linkedin.com/in/naikaj" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/naikaj18" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/naikaj18/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;