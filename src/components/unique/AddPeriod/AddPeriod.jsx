import { useForm } from "react-hook-form";
import { FaTimesCircle } from "react-icons/fa";
import Button from "../../Shared/Button/Button";
import useAxios from "../../../hooks/useAxios";
import { useState } from "react";
import { toast } from "react-toastify";

const AddPeriod = ({ availableTimes, refetch, setIsAddPeriod, id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const axiosInstance = useAxios();

  const handleAddPeriod = async (data) => {
    data.id = id;
    setIsLoading(true);
    try {
      const res = await axiosInstance.patch("/add-period", data);
      if (res?.data?.message) {
        toast.error(res.data.message);
      }
      if (res.data.modifiedCount) {
        toast.success("Period is added successfully");
        setIsAddPeriod(false);
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
      className="fixed -top-4 inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={() => setIsAddPeriod(false)}
    >
      <div
        className="bg-white p-8 rounded shadow-lg max-w-md relative w-full text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-600">Add Period</h2>
          </div>
          <button
            className="relative -top-4 -right-3"
            onClick={() => setIsAddPeriod(false)}
          >
            <FaTimesCircle className="text-2xl text-red-400 " />{" "}
          </button>
        </div>
        <div>
          <form
            className="w-full space-y-3"
            onSubmit={handleSubmit(handleAddPeriod)}
          >
            <div className="w-full ">
              <label className="text-gray-600 w-full font-medium inline-block space-y-1">
                <p className="text-left">Class Title</p>
                <input
                  type="text"
                  placeholder="Enter class Title"
                  required
                  {...register("title")}
                  className="w-full text-[15px] px-4 py-2.5 rounded border focus:outline-none focus:border-primary-color focus:border-opacity-50"
                />
              </label>
            </div>

            {/* Assign teacher to classroom */}
            <div className="w-full ">
              <label className="text-gray-600 w-full font-medium inline-block space-y-1">
                <p className="text-left">Available Time</p>
                <select
                  {...register("time")}
                  className="border text-[15px] focus:outline-none py-2 px-4 w-full focus:border-primary-color focus:border rounded"
                >
                  <option value="">
                    {availableTimes?.length
                      ? "Select Time"
                      : "All Time is booked"}
                  </option>
                  {availableTimes &&
                    availableTimes?.map((className) => (
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
                text={"Add Period"}
                customClass={"w-full"}
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPeriod;
