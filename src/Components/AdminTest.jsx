import { useEffect, useState } from "react";
import { getPendingJobs, approveJob } from "../JobService";

function AdminTest() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const res = await getPendingJobs();
      setJobs(res.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleApprove = async (id) => {
    try {
      await approveJob(id);
      alert("Job approved successfully!");
      // UI update: removes the approved job from the list
      setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
    } catch (error) {
      console.error("Error approving job:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Admin Dashboard - Pending Approvals
      </h2>

      <div className="max-w-4xl mx-auto grid gap-6">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job._id}
              className="
                bg-white
                p-6
                rounded-xl
                shadow-md
                hover:shadow-xl
                transition
                duration-300
                border-l-8
                border-green-600
              "
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4 uppercase">
                {job.title}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700 mb-4">
                <p>
                  <span className="font-semibold text-gray-900">Salary:</span>{" "}
                  {job.salary || "Not specified"}
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Qualification:</span>{" "}
                  {job.qualification || "Any Qualification"}
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Location:</span>{" "}
                  {job.location || "Anywhere"}
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => handleApprove(job._id)}
                  className="
                    bg-green-600
                    text-white
                    px-6
                    py-2
                    rounded-lg
                    hover:bg-green-700
                    active:scale-95
                    transition
                    font-semibold
                  "
                >
                  Approve Job
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 bg-white rounded-xl shadow">
            <p className="text-gray-500 text-lg">No pending job requests at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminTest;