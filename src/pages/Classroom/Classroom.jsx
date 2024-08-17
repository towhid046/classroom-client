import Added from "./../../components/unique/Added/Added";
const classrooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Classroom = () => {
  return (
    <section>
      <Added classrooms={classrooms} />
      <div className="space-y-4">
        {classrooms.map((classroom) => (
          <div key={classroom} className="p-5 rounded bg-white text-gray-700">
            <div className="mb-4 flex md:flex-row flex-col-reverse justify-between">
              <div>
                <h3 className="mb-2 underline text-xl font-semibold ">
                  Teacher
                </h3>
                <p>Name: Teacher Name</p>
                <small>Email: Teacher Email</small>
              </div>
              <h2 className="text-2xl font-semibold text-center">
                Class No: 1
              </h2>
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
        ))}
      </div>
    </section>
  );
};

export default Classroom;
