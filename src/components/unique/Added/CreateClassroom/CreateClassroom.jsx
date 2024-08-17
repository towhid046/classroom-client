import { useForm } from "react-hook-form";
import { FaTimesCircle } from "react-icons/fa";
import Button from "./../../../Shared/Button/Button";
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const CreateClassroom = ({ setIsClassroomToggle }) => {
  const { register, handleSubmit } = useForm();
  const handleCreateClassroom = (data) => {
    data.startTime += " " + data.start;
    data.endTime += " " + data.end;
    delete data.end;
    delete data.start;
    console.log(data);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={() => setIsClassroomToggle(false)}
    >
      <div
        className="bg-white p-8 rounded shadow-lg max-w-md relative w-full text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-600">
              Create New Classroom
            </h2>
          </div>
          <button
            className="relative -top-4 -right-3"
            onClick={() => setIsClassroomToggle(false)}
          >
            <FaTimesCircle className="text-2xl text-red-400 " />{" "}
          </button>
        </div>
        <div>
          <form
            className="w-full space-y-3"
            onSubmit={handleSubmit(handleCreateClassroom)}
          >
            <div className="w-full ">
              <label className="text-gray-600 w-full font-medium inline-block space-y-1">
                <p className="text-left">Name</p>
                <input
                  type="text"
                  placeholder="Enter class name"
                  required
                  {...register("name")}
                  className="w-full text-[15px] px-4 py-2.5 rounded border focus:outline-none focus:border-primary-color focus:border-opacity-50"
                />
              </label>
            </div>

            {/* on day */}
            <div className="w-full ">
              <label className="text-gray-600 w-full font-medium inline-block space-y-1">
                <p className="text-left">On Day</p>
                <select
                  {...register("onDay")}
                  className="border text-[15px] focus:outline-none py-2 px-4 w-full focus:border-primary-color focus:border rounded"
                >
                  <option value="">Select day</option>
                  {daysOfWeek.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* start time */}
            <div className="w-full ">
              <label className="text-gray-600 w-full font-medium inline-block space-y-1">
                <p className="text-left">Start Time</p>
                <div className="flex">
                  <input
                    type="number"
                    placeholder="Start time in number"
                    required
                    {...register("startTime")}
                    className="w-full text-[15px] px-4 py-2.5 rounded border focus:outline-none focus:border-primary-color focus:border-opacity-50"
                  />
                  <select
                    {...register("start")}
                    className="border focus:outline-none focus:border-primary-color focus:border rounded"
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </label>
            </div>

            {/* End time */}
            <div className="w-full">
              <label className="text-gray-600 w-full font-medium inline-block space-y-1">
                <p className="text-left">End Time</p>
                <div className="flex">
                  <input
                    type="number"
                    placeholder="End time in number"
                    required
                    {...register("endTime")}
                    className="w-full text-[15px] px-4 py-2.5 rounded border focus:outline-none focus:border-primary-color focus:border-opacity-50"
                  />
                  <select
                    {...register("end")}
                    className="border focus:outline-none focus:border-primary-color focus:border rounded"
                  >
                    <option value="PM">PM</option>
                    <option value="AM">AM</option>
                  </select>
                </div>
              </label>
            </div>

            <Button text={"Create"} customClass={"w-full"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateClassroom;
