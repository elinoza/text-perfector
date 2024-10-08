import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="text-neutral-600 flex items-center justify-end">
      <a
        href="https://github.com/elinoza/text-perfector"
        target="_blank"
        className="ml-2"
      >
        <FaGithub />
      </a>{" "}
    </div>
  );
};
export default Footer;
