import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "./../../components/Shared/LoadingSpinner/LoadingSpinner";
import Students from "./Students/Students";
import Teachers from "./Teachers/Teachers";
import useUserRole from "./../../hooks/useUserRole";
import { PiUsersFourThin, PiUsersThin } from "react-icons/pi";


const Dashboard = () => {
  const { loading } = useAuth();
  const [activeTab, setActiveTab] = useState("students");
  const { userRole, isLoading } = useUserRole();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-5 rounded  w-full max-w-6xl min-h-[90vh]">
        <p className="text-xl font-semibold mb-4 text-gray-500 italic">
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <span>
              {userRole?.split("")[0]?.toUpperCase() +
                userRole?.split("")?.slice(1, userRole.length)?.join("")}{" "}
              Dashboard
            </span>
          )}
        </p>

        <div className="mb-6">
          <div className="flex justify-center  mb-4">
            <div className="border-b-2 w-full"></div>

            <button
              className={`px-4 py-2 flex items-center min-w-max space-x-2 rounded-t-lg transition duration-500 ${
                activeTab === "students" ? "border-2 border-b-0 " : "border-b-2"
              }`}
              onClick={() => setActiveTab("students")}
            >
              <PiUsersFourThin className="inline-block" />
              <span>Students</span>
            </button>

            <button
              className={`px-4 py-2 flex items-center min-w-max space-x-2 rounded-t-lg transition duration-500  ${
                activeTab === "teachers" ? "border-2 border-b-0" : "border-b-2"
              }`}
              onClick={() => setActiveTab("teachers")}
            >
              <PiUsersThin className="inline-block" />
              <span>Teachers</span>
            </button>
            <div className="border-b-2 w-full"></div>
          </div>

          {activeTab === "students" && <Students />}
          {activeTab === "teachers" && <Teachers />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
