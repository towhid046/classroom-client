import CreateClassroom from "./CreateClassroom/CreateClassroom";
import { useState } from "react";
import Button from "./../../Shared/Button/Button";
import AddTeacher from "./AddTeacher/AddTeacher";
import AddStudent from "./AddStudent/AddStudent";
import useUserRole from "./../../../hooks/useUserRole";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";

const Added = ({ classroomLength, refetch }) => {
  const [isClassroomToggle, setIsClassroomToggle] = useState(false);
  const [isAddTeacher, setIsAddTeacher] = useState(false);
  const [isAddStudent, setIsAddStudent] = useState(false);
  const { userRole, isLoading } = useUserRole();

  return (
    <>
      {isLoading ? <LoadingSpinner/> : <div className=" mb-5 flex flex-col gap-2 justify-between items-center lg:gap-5 lg:flex-row ">
        {userRole === "principal" && (
          <Button
            clickHandler={() => setIsClassroomToggle(true)}
            text={"Create Classroom"}
          />
        )}
        {classroomLength && (
          <>
            {userRole === "student" ? (
              ""
            ) : (
              <>
                {userRole === "principal" && (
                  <Button
                    clickHandler={() => setIsAddTeacher(true)}
                    text={"Add Teacher"}
                  />
                )}
                {(userRole === "teacher" || userRole === "principal") && (
                  <Button
                    clickHandler={() => setIsAddStudent(true)}
                    text={"Add Student"}
                  />
                )}
              </>
            )}
          </>
        )}
      </div>}
      {isClassroomToggle && (
        <CreateClassroom
          setIsClassroomToggle={setIsClassroomToggle}
          refetch={refetch}
        />
      )}
      {isAddTeacher && (
        <AddTeacher setIsAddTeacher={setIsAddTeacher} refetch={refetch} />
      )}
      {isAddStudent && (
        <AddStudent setIsAddStudent={setIsAddStudent} refetch={refetch} />
      )}
    </>
  );
};

export default Added;
