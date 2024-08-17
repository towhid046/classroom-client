const ClassroomCard = ({ classroom }) => {
  const { name, startTime, endTime, onDay } = classroom;
  return (
    <div className="p-5 rounded bg-white text-gray-700">
      <div className="mb-4 flex gap-2 md:flex-row flex-col-reverse justify-between">
        <div>
          <h3 className="mb-2 underline text-xl font-semibold ">Teacher</h3>
          {classroom?.teacher?.name ? (
            <>
              <p className="font-medium">Name: {classroom?.teacher?.name}</p>
              <small>Email: {classroom?.teacher?.email}</small>
            </>
          ) : (
            <i className="text-gray-400">Teacher is not added Yet!</i>
          )}
        </div>
        <h2 className="md:text-2xl text-xl font-semibold text-center">
          {name}
        </h2>
        <i className="font-medium text-center">
          {onDay} : {startTime} - {endTime}
        </i>
      </div>
      <hr />
      <div className="mt-4">
        <div className="mb-3">
          <h3 className="underline text-xl font-semibold ">Students</h3>
        </div>
        <ol className=" list-decimal list-outside px-4 grid xl:grid-cols-3 lg:grid-cols-2  grid-cols-1 gap-2">
          {classroom?.students?.length ? (
            classroom?.students &&
            classroom?.students.map((student) => (
              <li key={student}>
                <p>Name: {student?.name}</p>
                <small>Email: {student?.email}</small>
              </li>
            ))
          ) : (
            <i className="text-gray-400">No students have added Yet!</i>
          )}
        </ol>
      </div>
    </div>
  );
};

export default ClassroomCard;
