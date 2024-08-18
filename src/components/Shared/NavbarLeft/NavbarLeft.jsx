import { NavLink } from "react-router-dom";
import FaHome from "../../../assets/images/icons/home.svg";
import FaPlus from "../../../assets/images/icons/new-list.svg";

const menuItems = [
  { id: 1, title: "Classroom", url: "/classroom", icon: FaHome, end: true },
  { id: 2, title: "Dashboard", url: "/classroom/dashboard", icon: FaPlus },
];

const NavbarLeft = () => {
  return (
    <aside className="w-[250px] md:flex hidden">
      <div className="w-[250px] bg-white top-0 fixed">
        <div>
          <div className="py-10 flex justify-center">
            <h1 className="text-3xl -rotate-12 font-bold mb-2">
              Class<span className="text-primary-color">Room</span>
            </h1>
          </div>
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.url}
                  end={item.end} // Add the "end" prop conditionally
                  className={({ isActive }) =>
                    `flex gap-[14px] items-center px-[26px] py-[14px] transition duration-300 
                    border-l-2 ${isActive ? "border-black bg-third-color" : "border-white hover:border-black hover:bg-third-color"}`
                  }
                >
                  <img src={item.icon} alt={item.title} />
                  <span className="text-[15px] text-[#5C635A]">
                    {item.title}
                  </span>
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