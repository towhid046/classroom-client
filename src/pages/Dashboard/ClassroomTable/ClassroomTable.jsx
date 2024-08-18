import { RiDeleteBin6Line } from "react-icons/ri";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner/LoadingSpinner";
import useToGetData from "../../../hooks/useToGetData";
import { TiPencil } from "react-icons/ti";
import { Tooltip } from "react-tooltip";
import useAxios from "../../../hooks/useAxios";
import { toast } from "react-toastify";
import swal  from 'sweetalert';

const ClassroomTable = () => {
  const {
    data: classrooms,
    isLoading,
    isError,
    error,
    refetch,
  } = useToGetData({
    queryKeyName: "classrooms",
    url: "/classrooms",
  });
  const axiosInstance = useAxios();

  const handleRemoveClassroom = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this classroom!",
      icon: "warning",
      buttons: {
        cancel: "Cancel",
        confirm: "Delete",
      },
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const res = await axiosInstance.delete(`/remove-classroom?id=${id}`);
          if (res?.data?.deletedCount) {
            toast.success("Classroom Removed Successfully!");
            refetch();
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    });
  };
  

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-4 bg-secondary-color rounded overflow-x-auto">
      {!classrooms?.length ? (
        <p className="text-center text-gray-500">No classroom have found</p>
      ) : (
        <table className="min-w-full bg-white text-center rounded">
          <thead>
            <tr className="border-b text-[15px]">
              <th className="py-2 px-4">SN.</th>
              <th className="py-2 px-4">Classroom Name</th>
              <th className="py-2 px-4">On Day</th>
              <th className="py-2 px-4">Time</th>
              <th className="py-2 px-4">Edit</th>
              <th className="py-2 px-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {classrooms?.map((classroom, index) => (
              <tr key={classroom._id} className="border-b text-[15px]">
                <td className="py-2 px-4 ">{index + 1}</td>
                <td className="py-2 px-4">{classroom?.name}</td>
                <td className="py-2 px-4">{classroom?.onDay}</td>
                <td className="py-2 px-4">{`${classroom?.startTime}  - ${classroom?.endTime}`}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() =>
                      toast.info(
                        "Due to the time limitation I am not able to Added update functionality"
                      )
                    }
                    className="bg-secondary-color rounded p-2"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Edit"
                  >
                    <TiPencil className="text-lg text-green-400" />
                  </button>
                </td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleRemoveClassroom(classroom?._id)}
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
      )}
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default ClassroomTable;
