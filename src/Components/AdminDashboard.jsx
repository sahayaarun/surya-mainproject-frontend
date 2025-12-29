import { useEffect,useState} from "react";
import { getPendingJobs, approveJob } from "../JobService";

function AdminDashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    const res = await getPendingJobs();
    setJobs(res.data);
  };

  const handleApprove = async (id) => {
    await approveJob(id);
    alert("Job approved");
    // Card hide in UI without reloading backend data
    setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Pending Jobs
      </h2>

      <div className="max-w-4xl mx-auto grid gap-6">
        {jobs.map((job) => (
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
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              {job.title}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700 mb-4">
              <p>
                <span className="font-semibold text-gray-900">Salary:</span>{" "}
                {job.salary || "Not mentioned"}
              </p>
              <p>
                <span className="font-semibold text-gray-900">Qualification:</span>{" "}
                {job.qualification || "Any"}
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
                  px-5
                  py-2
                  rounded-lg
                  hover:bg-green-700
                  active:scale-95
                  transition
                "
              >
                Approve
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;