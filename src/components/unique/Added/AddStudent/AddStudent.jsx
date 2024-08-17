import { useForm } from "react-hook-form";
import { FaTimesCircle } from "react-icons/fa";
import Button from "./../../../Shared/Button/Button";
const allClasses = ["Class-1", "Class-2", "Class-3", "Class-4"];
const AddStudent = ({ setIsAddStudent }) => {
  const { register, handleSubmit } = useForm();
  const handleAddStudent = (data) => {
    console.log(data)
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

            {/* Assign teacher to classroom */}
            <div className="w-full ">
              <label className="text-gray-600 w-full font-medium inline-block space-y-1">
                <p className="text-left">Assigned class</p>
                <select
                  {...register("assignedClass")}
                  className="border text-[15px] focus:outline-none py-2 px-4 w-full focus:border-primary-color focus:border rounded"
                >
                  <option value="">Select assigned class</option>
                  {allClasses.map((className) => (
                    <option key={className} value={className}>
                      {className}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <Button text={"Add Student"} customClass={"w-full"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;