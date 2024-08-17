import { useForm } from "react-hook-form";
import { FaTimesCircle } from "react-icons/fa";
import Button from "./../../../Shared/Button/Button";
import useToGetData from "../../../../hooks/useToGetData";
import useAxios from "../../../../hooks/useAxios";
import { useState } from "react";
import { toast } from "react-toastify";
import { LuEye, LuEyeOff } from "react-icons/lu";

const AddStudent = ({ setIsAddStudent, refetch }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPassShow, setIsPassShow] = useState(false);
  const { register, handleSubmit } = useForm();
  const axiosInstance = useAxios();
  const { data: classNames, isLoading: loading } = useToGetData({
    queryKeyName: "class-names",
    url: "/classroom-names-all",
  });

  const handleAddStudent = async (data) => {
    if (data.password?.length <= 4) {
      return toast.error("Password must be longer that 4 characters");
    }
    if (!data.assignedClass) {
      return toast.error("You must assign this student to a class");
    }
    setIsLoading(true);
    try {
      const res = await axiosInstance.patch("/add-student", data);
      if (res?.data?.message) {
        toast.error(res.data.message);
      }
      if (res.data.modifiedCount) {
        toast.success("Student is added successfully");
        setIsAddStudent(false);
        refetch();
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={() => setIsAddStudent(false)}
    >
      <div
        className="bg-white p-8 rounded shadow-lg max-w-md relative w-full text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-600">Add Student</h2>
          </div>
          <button
            className="relative -top-4 -right-3"
            onClick={() => setIsAddStudent(false)}
          >
            <FaTimesCircle className="text-2xl text-red-400 " />{" "}
          </button>
        </div>
        <div>
          <form
            className="w-full space-y-3"
            onSubmit={handleSubmit(handleAddStudent)}
          >
            <div className="w-full ">
              <label className="text-gray-600 w-full font-medium inline-block space-y-1">
                <p className="text-left">Student Name</p>
                <input
                  type="text"
                  placeholder="Enter student name"
                  required
                  {...register("name")}
                  className="w-full text-[15px] px-4 py-2.5 rounded border focus:outline-none focus:border-primary-color focus:border-opacity-50"
                />
              </label>
            </div>

            {/* teacher email */}
            <div className="w-full ">
              <label className="text-gray-600 w-full font-medium inline-block space-y-1">
                <p className="text-left">Student Email</p>
                <input
                  type="email"
                  placeholder="Enter student email"
                  required
                  {...register("email")}
                  className="w-full text-[15px] px-4 py-2.5 rounded border focus:outline-none focus:border-primary-color focus:border-opacity-50"
                />
              </label>
            </div>

            {/* Student password */}
            <div className="w-full relative">
              <label className="text-gray-600 w-full font-medium inline-block space-y-1">
                <p className="text-left">Student Password</p>
                <input
                  type={isPassShow ? "text" : "password"}
                  placeholder="Create student password"
                  required
                  {...register("password")}
                  className="w-full text-[15px] px-4 py-2.5 rounded border focus:outline-none focus:border-primary-color focus:border-opacity-50"
                />
              </label>
              <div className="absolute top-10 right-3">
                <span
                  className="inline-block cursor-pointer"
                  onClick={() => setIsPassShow(!isPassShow)}
                >
                  {isPassShow ? (
                    <LuEye className="text-lg" />
                  ) : (
                    <LuEyeOff className="text-lg" />
                  )}
                </span>
              </div>
            </div>

            {/* Assign teacher to classroom */}
            <div className="w-full ">
              <label className="text-gray-600 w-full font-medium inline-block space-y-1">
                <p className="text-left">Assigned class</p>
                <select
                  {...register("assignedClass")}
                  className="border text-[15px] focus:outline-none py-2 px-4 w-full focus:border-primary-color focus:border rounded"
                >
                  <option value="">
                    {loading ? "Class is loading..." : "Select assigned class"}
                  </option>
                  {classNames &&
                    classNames?.map((className) => (
                      <option key={className} value={className}>
                        {className}
                      </option>
                    ))}
                </select>
              </label>
            </div>

            {isLoading ? (
              <Button
                isDisabled={isLoading}
                text={"Adding..."}
                customClass={"w-full"}
              />
            ) : (
              <Button
                isDisabled={isLoading}
                text={"Add Student"}
                customClass={"w-full"}
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
