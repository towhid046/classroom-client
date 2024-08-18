import useAuth from "./../../../hooks/useAuth";
import Button from "./../../../components/Shared/Button/Button";
import { useState } from "react";
import AddPeriod from "../../../components/unique/AddPeriod/AddPeriod";
const ClassroomCard = ({ classroom, refetch }) => {
  const [isAddPeriod, setIsAddPeriod] = useState(false);
  const { name, startTime, endTime, onDay, availableTimes, _id, periods } =
    classroom;
  const { user } = useAuth();
  return (
    <>
      <div className="p-5 rounded bg-white text-gray-700">
        <div className="mb-4 flex gap-2 md:flex-row flex-col-reverse justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h3 className="mb-2 underline text-xl font-semibold ">Teacher</h3>
              {user?.assignedClass === name && user.role === "teacher" && (
                <small className="bg-green-400 text-white px-3 py-1 rounded-full">
                  You
                </small>
              )}
            </div>
            {classroom?.teacher?.name ? (
              <>
                <p className="font-medium">Name: {classroom?.teacher?.name}</p>
                <small>Email: {classroom?.teacher?.email}</small>
              </>
            ) : (
              <i className="text-gray-400">Teacher is not added Yet!</i>
            )}
          </div>
          {periods?.length ? (
            <ul className="list-disc">
              {periods &&
                periods.map((period) => (
                  <li key={period.time}>{period.title + " " + period.time}</li>
                ))}
            </ul>
          ) : (
            <span className="text-gray-400 italic">
              No period has added yet
            </span>
          )}
          <div className="flex flex-col">
            <h2 className="md:text-2xl text-xl font-semibold md:text-right text-center">
              {name}
            </h2>
            <i className="font-medium text-center">
              {onDay} : {startTime} - {endTime}
            </i>
            {user.role === "teacher" && user.assignedClass === name && (
              <Button
                clickHandler={() => setIsAddPeriod(true)}
                text={"Add Period"}
                customClass={"py-1 px-3 text-xs"}
              />
            )}
          </div>
        </div>
        <hr />
        <div className="mt-4">
          <div className="mb-3">
            <div className="flex items-center gap-3">
              <h3 className="mb-2 underline text-xl font-semibold ">Student</h3>
              {user?.assignedClass === name && user.role === "student" && (
                <small className="bg-green-400 text-white px-3 py-1 rounded-full">
                  Your class
                </small>
              )}
            </div>
          </div>
          <ol className=" list-decimal list-outside px-4 grid xl:grid-cols-3 lg:grid-cols-2  grid-cols-1 gap-2">
            {classroom?.students?.length ? (
              classroom?.students.map((student, index) => (
                <li key={index}>
                  <p>Name: {student?.name}</p>
                  <small>Email: {student?.email}</small>
                </li>
              ))
            ) : (
              <i className="text-gray-400">No student has added Yet!</i>
            )}
          </ol>
        </div>
      </div>
      {isAddPeriod && (
        <AddPeriod
          id={_id}
          availableTimes={availableTimes}
          setIsAddPeriod={setIsAddPeriod}
          refetch={refetch}
        />
      )}
    </>
  );
};

export default ClassroomCard;
