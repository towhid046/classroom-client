import { toast } from "react-toastify";
import useAxios from "../../../hooks/useAxios";
import useToGetData from "./../../../hooks/useToGetData";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner/LoadingSpinner";
import { TiPencil } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Tooltip } from "react-tooltip";

const Students = () => {
  const axiosInstance = useAxios();
  const {
    data: students,
    isLoading,
    isError,
    error,
    refetch,
  } = useToGetData({
    queryKeyName: "students",
    url: "/specific-users/student",
  });

  const handleRemoveStudent = async (email) => {
    try {
      const res = await axiosInstance.patch(`/blocked-user?email=${email}`);
      if (res.data.modifiedCount) {
        toast.success("User Blocked Successfully!", {
          position: "top-center",
        });
        refetch();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpdateStudent = async (email, applyFor) => {
    try {
      const res = await axiosInstance.put(
        `/activate-user?email=${email}&role=${applyFor}`
      );
      if (res.data.modifiedCount) {
        toast.success("User Activated Successfully!", {
          position: "top-center",
        });
        refetch();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-4 bg-secondary-color rounded overflow-x-auto">
      <table className="min-w-full bg-white text-center rounded">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-4">SN.</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Edit</th>
            <th className="py-2 px-4">Delete</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((user, index) => (
            <tr key={user._id} className="border-b">
              <td className="py-2 px-4 ">{index + 1}</td>
              <td className="py-2 px-4">{user?.name}</td>
              <td className="py-2 px-4">{user?.email}</td>
              <td className="py-2 px-4">
                <button
                  //   onClick={() => handleDeleteService(_id)}
                  className="bg-secondary-color rounded p-2"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Edit"
                >
                  <TiPencil className="text-lg text-green-400" />
                </button>
              </td>
              <td className="py-2 px-4">
                <button
                  //   onClick={() => handleDeleteService(_id)}
                  className="bg-secondary-color rounded p-2"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Delete"
                >
                  <RiDeleteBin6Line className="text-lg text-red-600" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Students;
