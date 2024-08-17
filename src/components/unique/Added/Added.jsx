import CreateClassroom from "./CreateClassroom/CreateClassroom";
import { useState } from "react";
import Button from "./../../Shared/Button/Button";
import AddTeacher from "./AddTeacher/AddTeacher";
import AddStudent from "./AddStudent/AddStudent";

const Added = ({ classroomLength, refetch }) => {
  const [isClassroomToggle, setIsClassroomToggle] = useState(false);
  const [isAddTeacher, setIsAddTeacher] = useState(false);
  const [isAddStudent, setIsAddStudent] = useState(false);

  return (
    <>
      <div className=" mb-5 flex flex-col gap-2 justify-between items-center lg:gap-5 lg:flex-row ">
        <Button
          clickHandler={() => setIsClassroomToggle(true)}
          text={"Create Classroom"}
        />
        {classroomLength && (
          <>
            <Button
              clickHandler={() => setIsAddTeacher(true)}
              text={"Add Teacher"}
            />
            <Button
              clickHandler={() => setIsAddStudent(true)}
              text={"Add Student"}
            />
          </>
        )}
      </div>
      {isClassroomToggle && (
        <CreateClassroom setIsClassroomToggle={setIsClassroomToggle} refetch={refetch} />
      )}
      {isAddTeacher && <AddTeacher setIsAddTeacher={setIsAddTeacher} />}
      {isAddStudent && <AddStudent setIsAddStudent={setIsAddStudent} />}
    </>
  );
};

export default Added;
