import AddResume from "@/components/AddResume";

const Dashboard = () => {
  return (
    <div className="p-10 md:p-20 lg:p-32">
      <h2 className="font-bold text-3xl">My resume</h2>
      <p>Create your resume to get your dream job.</p>
      <div
        className="grid grid-cols-2 
      md:grid-cols-3 lg:grid-cols-5 gap-5
      mt-10
      "
      >
        <AddResume />
      </div>
    </div>
  );
};

export default Dashboard;
