import { LuPlus } from "react-icons/lu";

const Button = ({ customClass, text, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className={` ${customClass} bg-primary-color hover:bg-blue-600 transition duration-300 text-white px-4 py-2 rounded flex justify-center items-center gap-2`}
    >
      <LuPlus />
      <span>{text}</span>
    </button>
  );
};

export default Button;
