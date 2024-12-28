import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const handleClick = () => {};

  return (
    <nav className=" mb-20 flex items-center justify-between py6">
      <div className="flex flex-shrink-0 items-center"></div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/olaniyan-temitope-8565a8268?
          // utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/olat69"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
