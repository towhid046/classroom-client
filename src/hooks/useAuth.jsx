import { useContext } from "react";
import { UserContext } from "../providers/ContextProvider";

const useAuth = () => {
  return useContext(UserContext);
};

export default useAuth;
