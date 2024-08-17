import { Outlet } from "react-router-dom";
import NavbarLeft from "../components/Shared/NavbarLeft/NavbarLeft";
import NavbarTop from "../components/Shared/NavbarTop/NavbarTop";
const Root = () => {
  return (
    <section className="container mx-auto flex px-4 w-full">
      <NavbarLeft />
      <div className="flex-grow">
        <NavbarTop />

        <div className="bg-secondary-color lg:p-5 p-4 min-h-screen">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Root;
