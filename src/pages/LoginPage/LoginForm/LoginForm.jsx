import { BsCheck } from "react-icons/bs";
import lineX from "../../../assets/images/icons/line-x.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const [toggle, setToggle] = useState(false);
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleLogin = async (data) => {
    const { email, password } = data;

    try {
      await loginUser(email, password);
      toast.success("Login success");

      navigate("/");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex-1">
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="flex flex-col gap-3 mb-5">
          <label className="text-[#152A16] font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            {...register("email")}
            className="text-[15px] px-5 py-3.5 rounded-[10px] border focus:outline-none focus:border-primary-color focus:border-opacity-50"
          />
        </div>

        <div className="flex flex-col gap-3 mb-[14px]">
          <label className="text-[#152A16] font-medium">Password</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Enter your password"
            required
            className="text-[15px] px-5 py-3.5 rounded-[10px] border focus:outline-none focus:border-primary-color focus:border-opacity-50"
          />
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
          <button className="px-20 py-[14px] rounded-xl bg-primary-color text-white">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
