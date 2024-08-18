import LoginForm from "./LoginForm/LoginForm";
import useScrollToTop from "../../hooks/useScrollToTop";
const LoginPage = () => {
  useScrollToTop();
  return (
    <section className="container mx-auto px-4 flex justify-center min-h-screen items-center bg-white py-24">
      <div className="flex md:gap-6 md:flex-row flex-col gap-4 text-[#5C635A] ">
        <div className={`flex-1`}>
          <h1 className="text-4xl font-bold mb-2">
            Class<span className="text-primary-color">Room</span>
          </h1>
          <h2 className="mb-4 text-[#152A16] text-[30px] font-semibold">
            Login to Your Account
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            error repellendus inventore beatae commodi non dolore consectetur
            fugit nam doloribus?
          </p>
        </div>

        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
