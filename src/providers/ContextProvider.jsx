import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
  };
  const updateUserProfile = (userName) => {};

  const loginUser = (email, password) => {
    setLoading(true);
  };

  const logInWithGoogle = () => {};

  const logOutUser = () => {
    setLoading(false);
  };

  const userInfo = {
    createUser,
    user,
    logOutUser,
    loginUser,
    loading,
    logInWithGoogle,
    updateUserProfile,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};
ContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ContextProvider;
