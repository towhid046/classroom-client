import Added from "./../../components/unique/Added/Added";
import useToGetData from "./../../hooks/useToGetData";
import LoadingSpinner from "./../../components/Shared/LoadingSpinner/LoadingSpinner";
import ClassroomCard from "./ClassroomCard/ClassroomCard";
import useScrollToTop from "./../../hooks/useScrollToTop";
const Classroom = () => {
  useScrollToTop();
  const {
    data: classrooms,
    isLoading,
    isError,
    error,
    refetch,
  } = useToGetData({
    queryKeyName: "classrooms",
    url: "/classrooms",
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <p>{error}</p>;
  }

  return (
    <section>
      <Added classroomLength={classrooms?.length} refetch={refetch} />
      <div className="space-y-4">
        {classrooms
          ?.slice()
          .reverse()
          .map((classroom) => (
            <ClassroomCard
              key={classroom._id}
              classroom={classroom}
              refetch={refetch}
            />
          ))}
      </div>
    </section>
  );
};

export default Classroom;
