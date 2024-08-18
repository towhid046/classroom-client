import { useState } from "react";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useUserRole = () => {
  const { user } = useAuth();
  const [userRole, setUserRole] = useState("student");
  const axiosInstance = useAxios();

  if (user) {
    const getUserRole = async () => {
      const res = await axiosInstance.get(
        `/user-role?id=${user?._id}&email=${user?.email}`
      );
      if (res?.data?.role === "principal") {
        setUserRole("principal");
        return;
      }
      if (res?.data?.role === "teacher") {
        setUserRole("teacher");
      }
    };
    getUserRole();
  }

  return { userRole };
};

export default useUserRole;
