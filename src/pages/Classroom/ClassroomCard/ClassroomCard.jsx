const ClassroomCard = ({ classroom }) => {
  const { name, startTime, endTime, onDay } = classroom;
  return (
    <div className="p-5 rounded bg-white text-gray-700">
      <div className="mb-4 flex gap-2 md:flex-row flex-col-reverse justify-between">
        <div>
          <h3 className="mb-2 underline text-xl font-semibold ">Teacher</h3>
          <p>Name: Teacher Name</p>
          <small>Email: Teacher Email</small>
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
          {[1, 2, 3, 4, 5, 6, 7, 8].map((student) => (
            <li key={student}>
              <p>Name: Student Name</p>
              <small>Email: Student Email</small>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ClassroomCard;
