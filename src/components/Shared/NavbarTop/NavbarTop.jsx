import { IoIosArrowDown } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import notification from "../../../assets/images/icons/notification.svg";
import line from "../../../assets/images/icons/line.svg";
import logout from "../../../assets/images/icons/logout.svg";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";

const NavbarTop = () => {
  const { user, logOutUser } = useAuth();
  const navigate = useNavigate();
  const handleLogoutUser = async () => {
    logOutUser();
    navigate("/");
    toast.success("Logout success");
  };
  return (
    <nav className="w-full flex justify-between border-l border-secondary-color py-6 px-[30px] text-[#152A16] sticky top-0 bg-white z-50">
      <div className="flex gap-3 items-center">
        <figure>
          <FaRegUserCircle className="text-3xl text-gray-500" />
        </figure>
        <div>
          <div className="flex justify-between">
            <h2 className="font-medium text-[15px]">
              {user ? user?.name : "Guest User"}
            </h2>
            <button>
              <IoIosArrowDown />
            </button>
          </div>
          <p className="text-[#5C635A] font-normal text-[14px]">
            {user ? user?.email : "guestuser@gmail.com"}
          </p>
        </div>
      </div>

      <div>
        <div className="flex gap-5">
          <img
            className="w-10 cursor-pointer"
            src={notification}
            alt="Notification"
          />
          <img src={line} alt="Line" />
          {user ? (
            <button
              onClick={handleLogoutUser}
              className="flex items-center gap-2.5"
            >
              <span className="text-[#F15E4A] font-medium text-[15px]">
                Log Out
              </span>
              <span className="flex justify-center items-center rounded-full w-10 h-10 bg-[#FFECEA]">
                <img className="w-5" src={logout} alt="" />
              </span>
            </button>
          ) : (
            <button>
              <Link
                to={"/"}
                className="text-primary-color font-medium text-[15px]"
              >
                Login
              </Link>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarTop;
