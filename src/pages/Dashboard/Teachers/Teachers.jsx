import { RiDeleteBin6Line } from "react-icons/ri";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner/LoadingSpinner";
import useToGetData from "../../../hooks/useToGetData";
import { TiPencil } from "react-icons/ti";
import { Tooltip } from "react-tooltip";

const Teachers = () => {
  const {
    data: teachers,
    isLoading,
    isError,
    error,
    refetch,
  } = useToGetData({
    queryKeyName: "teachers",
    url: "/specific-users/teacher",
  });

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
          {teachers?.map((user, index) => (
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

export default Teachers;
