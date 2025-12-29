import { useEffect, useState } from "react";
import { getApprovedJobs } from "../JobService";

const JobseekerDashboard = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const res = await getApprovedJobs();
      setJobs(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const applyJob = (title) => {
    alert(`Applied for ${title}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">
        Jobseeker Dashboard
      </h2>

      {/* Grid: 4 columns for desktop, 2 for tablet, 1 for mobile */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="
              bg-white
              rounded-xl
              p-4
              shadow-md
              hover:shadow-lg
              transition
              border-t-4
              border-blue-600
              flex flex-col justify-between
            "
          >
            <div className="space-y-1.5 text-xs text-gray-600">
              <h3 className="text-sm font-bold text-gray-900 truncate">
                {job.title}
              </h3>
              
              <p>
                <span className="font-semibold text-gray-800">Salary:</span>{" "}
                {job.salary || "N/A"}
              </p>

              <p>
                <span className="font-semibold text-gray-800">Qual:</span>{" "}
                {job.qualification || "Any"}
              </p>

              <p className="truncate">
                <span className="font-semibold text-gray-800">Loc:</span>{" "}
                {job.location || "Anywhere"}
              </p>
            </div>

            <div className="mt-4">
              <button
                onClick={() => applyJob(job.title)}
                className="
                  w-full
                  bg-blue-600
                  text-white
                  py-1.5
                  rounded-md
                  text-xs
                  font-bold
                  hover:bg-blue-700
                  transition
                "
              >
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobseekerDashboard;