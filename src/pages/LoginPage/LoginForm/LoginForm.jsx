import { BsCheck } from "react-icons/bs";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAxios from "./../../../hooks/useAxios";

const LoginForm = () => {
  const [toggle, setToggle] = useState(false);
  const [isPassShow, setIsPassShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser, setLoading } = useAuth();
  const navigate = useNavigate();
  const axiosInstance = useAxios();
  const { register, handleSubmit } = useForm();

  const handleLogin = async (data) => {
    const { email, password } = data;
    setIsLoading(true);
    try {
      const res = await axiosInstance.get(
        `/user?email=${email}&password=${password}`
      );
      if (res?.data?.message) {
        toast.error(res.data.message);
      }
      setUser(res.data);
      if (res.data?.name) {
        toast.success("Login success");
        navigate("/classroom");
      }
      localStorage.setItem("user", JSON.stringify(res?.data));
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
      setLoading(false);
    }
  };

  return (
    <div className="flex-1">
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="flex flex-col gap-1 mb-5">
          <label className="text-[#152A16] font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            {...register("email")}
            className="text-[15px] px-5 py-3.5 rounded-[10px] border-2 focus:outline-none focus:border-primary-color focus:border-opacity-50"
          />
        </div>

        <div className="flex flex-col gap-1 mb-[14px] relative">
          <label className="text-[#152A16] font-medium">Password</label>
          <input
            type={isPassShow ? "text" : "password"}
            {...register("password")}
            placeholder="Enter your password"
            required
            className="text-[15px] px-5 py-3.5 rounded-[10px] border-2 focus:outline-none focus:border-primary-color focus:border-opacity-50"
          />
          <div
            onClick={() => setIsPassShow(!isPassShow)}
            className="cursor-pointer absolute right-0 top-7 bg-gray-300 text-black  py-[15px] px-4 rounded-r-[10px]"
          >
            {isPassShow ? "Hide" : "Show"}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2.5">
            {!toggle ? (
              <div
                onClick={() => setToggle(!toggle)}
                className="cursor-pointer w-[17px] h-[16px] border rounded"
              ></div>
            ) : (
              <div
                onClick={() => setToggle(!toggle)}
                className="cursor-pointer w-[17px] h-[16px] border rounded flex justify-center items-center bg-primary-color"
              >
                <BsCheck className="text-white" />
              </div>
            )}
            <span
              onClick={() => setToggle(!toggle)}
              className="cursor-pointer text-[14px]"
            >
              Remember me
            </span>
          </div>
          <u className="text-primary-color font-medium cursor-pointer">
            Forgot password?
          </u>
        </div>

        {/* sign in button */}
        <div className="flex justify-center mt-8">
          <button
            disabled={isLoading}
            className="px-20 py-[14px] rounded-xl bg-primary-color text-white"
          >
            {isLoading ? "Loading.." : "Sign in"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
