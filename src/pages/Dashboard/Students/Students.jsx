import { toast } from "react-toastify";
import useAxios from "../../../hooks/useAxios";
import useToGetData from "./../../../hooks/useToGetData";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner/LoadingSpinner";
import { TiPencil } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Tooltip } from "react-tooltip";
import useUserRole from "./../../../hooks/useUserRole";
import swal from "sweetalert";

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
  const { userRole, isLoading: loading } = useUserRole();

  const handleRemoveStudent = (email, assignedClass) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this student!",
      icon: "warning",
      buttons: {
        cancel: "Cancel",
        confirm: "Delete",
      },
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const res = await axiosInstance.delete(
            `/remove-student?email=${email}&assignedClass=${assignedClass}`
          );
          if (res?.data?.modifiedCount) {
            toast.success("Student Removed Successfully!");
            refetch();
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    });
  };

  if (isLoading || loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-4 bg-secondary-color rounded overflow-x-auto">
      {!students?.length ? (
        <p className="text-center text-gray-500">No student have found</p>
      ) : (
        <table className="min-w-full bg-white text-center rounded">
          <thead>
            <tr className="border-b text-[15px]">
              <th className="py-2 px-4">SN.</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Class</th>
              {userRole !== "student" && (
                <>
                  <th className="py-2 px-4">Edit</th>
                  <th className="py-2 px-4">Delete</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {students?.map((user, index) => (
              <tr key={user._id} className="border-b text-[15px]">
                <td className="py-2 px-4 ">{index + 1}</td>
                <td className="py-2 px-4">{user?.name}</td>
                <td className="py-2 px-4">{user?.email}</td>
                <td className="py-2 px-4">{user?.assignedClass}</td>
                {userRole !== "student" && (
                  <>
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
                        onClick={() =>
                          handleRemoveStudent(user?.email, user?.assignedClass)
                        }
                        className="bg-secondary-color rounded p-2"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Delete"
                      >
                        <RiDeleteBin6Line className="text-lg text-red-600" />
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Students;
