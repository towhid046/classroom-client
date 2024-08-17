import { NavLink } from "react-router-dom";
import FaHome from "../../../assets/images/icons/home.svg";
import FaPlus from "../../../assets/images/icons/new-list.svg";
import useAuth from "../../../hooks/useAuth";

const menuItems = [
  { id: 1, title: "Classroom", url: "/classroom", icon: FaHome },
  { id: 2, title: "Dashboard", url: "/dashboard", icon: FaPlus },
];

const NavbarLeft = () => {
  const { user } = useAuth();
  return (
   <aside className="w-[250px] md:flex hidden">
     <div className="w-[250px] bg-white top-0 fixed">
      <div>
        <div className="py-10 flex justify-center">
          <h1 className="text-3xl -rotate-12 font-bold mb-2">
            Class<span className="text-primary-color">Room</span>
          </h1>
        </div>
        <ul className="nav-left-menu">
          {menuItems.map((item) => (
            <li
              key={item.id}
             
            >
              <NavLink
                to={item.url}
                className="flex gap-[14px] items-center px-[26px] py-[14px] transition duration-300 hover:border-black hover:border-l-2 border-l border-white  hover:bg-third-color"
              >
                <img src={item.icon} alt={item.title} />
                <span className="text-[15px] text-[#5C635A]">{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
   </aside>
  );
};

export default NavbarLeft;
