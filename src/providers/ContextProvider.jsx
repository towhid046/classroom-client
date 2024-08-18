import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = localStorage.getItem("user");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
      setLoading(false);
    }
  }, []);

  const logOutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
    setLoading(false);
  };

  const userInfo = {
    user,
    logOutUser,
    setUser,
    setLoading,
    loading,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};
ContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ContextProvider;
