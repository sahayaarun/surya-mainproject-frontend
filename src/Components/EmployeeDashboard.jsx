import { useState } from "react";
import { postJob } from "../JobService";

const EmployeeDashboard = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [job, setJob] = useState({
    title: "",
    qualification: "",
    salary: "",
    location: ""
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handlePost = async () => {
    if (!job.title || !job.qualification || !job.salary || !job.location) {
      alert("Please fill all fields");
      return;
    }

    try {
      await postJob(job);
      alert("Job posted successfully! Waiting for admin approval.");
      setJob({ title: "", qualification: "", salary: "", location: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Error posting job. Check your connection.");
    }
  };

  // Navbar Component
  const Navbar = () => (
    <nav className="flex justify-between items-center px-10 py-5 border-b">
      <h1 className="text-2xl font-bold text-gray-800">JobPortal 📊</h1>
      <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
        <button onClick={() => setCurrentPage("home")} className="hover:text-blue-600">Home</button>
        <button onClick={() => setCurrentPage("about")} className="hover:text-blue-600">About</button>
        <button onClick={() => setCurrentPage("blog")} className="hover:text-blue-600">Blog</button>
        <button onClick={() => setCurrentPage("profile")} className="hover:text-blue-600">Profile</button>
        <button onClick={() => setCurrentPage("contact")} className="hover:text-blue-600">Contact</button>
        
      </div>
    </nav>
  );

  // Home Page
  const HomePage = () => (
    <>
      
      <div
  className="relative h-[550px] bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')",
  }}
>
      
      
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white w-full max-w-5xl px-4">
          <h2 className="text-5xl font-bold mb-12">WE EMPLOYEE READY GIVE ADMIN JOB LIST 🗽</h2>

          <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl shadow-2xl">
            <div className="bg-white p-6 rounded-lg grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              <div className="text-left">
                <label className="text-gray-700 text-xs font-bold uppercase mb-1 block">Title</label>
                <input
                  className="w-full p-3 border border-gray-200 rounded focus:ring-2 focus:ring-blue-400 outline-none text-gray-800"
                  placeholder="eg: Web Dev"
                  name="title"
                  value={job.title}
                  onChange={handleChange}
                />
              </div>

              <div className="text-left">
                <label className="text-gray-700 text-xs font-bold uppercase mb-1 block">Qualification</label>
                <input
                  className="w-full p-3 border border-gray-200 rounded focus:ring-2 focus:ring-blue-400 outline-none text-gray-800"
                  placeholder="Any Degree"
                  name="qualification"
                  value={job.qualification}
                  onChange={handleChange}
                />
              </div>

              <div className="text-left">
                <label className="text-gray-700 text-xs font-bold uppercase mb-1 block">Salary</label>
                <input
                  className="w-full p-3 border border-gray-200 rounded focus:ring-2 focus:ring-blue-400 outline-none text-gray-800"
                  placeholder="Monthly"
                  name="salary"
                  value={job.salary}
                  onChange={handleChange}
                />
              </div>

              <div className="text-left">
                <label className="text-gray-700 text-xs font-bold uppercase mb-1 block">Location</label>
                <input
                  className="w-full p-3 border border-gray-200 rounded focus:ring-2 focus:ring-blue-400 outline-none text-gray-800"
                  placeholder="City"
                  name="location"
                  value={job.location}
                  onChange={handleChange}
                />
              </div>

              <button
                onClick={handlePost}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded transition duration-200 uppercase tracking-wider"
              >
                Post Job
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-20 px-4">
        <div className="text-center group">
          <div className="text-blue-500 text-4xl mb-4 group-hover:scale-110 transition">📋</div>
          <h4 className="font-bold text-gray-800">Search Millions of Jobs</h4>
        </div>
        <div className="text-center group">
          <div className="text-blue-500 text-4xl mb-4 group-hover:scale-110 transition">⚙</div>
          <h4 className="font-bold text-gray-800">Easy To Manage Jobs</h4>
        </div>
        <div className="text-center group">
          <div className="text-blue-500 text-4xl mb-4 group-hover:scale-110 transition">🎓</div>
          <h4 className="font-bold text-gray-800">Top Careers</h4>
        </div>
        <div className="text-center group">
          <div className="text-blue-500 text-4xl mb-4 group-hover:scale-110 transition">👤</div>
          <h4 className="font-bold text-gray-800">Search Expert Candidates</h4>
        </div>
      </div>
    </>
  );

  // About Page
 const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center px-6 py-16">
      
      {/* Main Card */}
      <div className="bg-white max-w-6xl w-full rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left - Company Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Company Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-4xl font-extrabold text-center px-6">
              Empowering Careers,<br />Connecting Talent
            </h2>
          </div>
        </div>

        {/* Right - Content */}
        <div className="p-12 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
            About JobPortal
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            <span className="font-semibold text-gray-800">JobPortal</span> is a
            trusted platform designed to connect talented individuals with top
            employers across various industries.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Our mission is to make job searching simple, efficient, and accessible
            for everyone while helping companies find the right talent faster.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 text-center mb-8">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
              <p className="text-gray-500 text-sm">Jobs Posted</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-purple-600">5K+</h3>
              <p className="text-gray-500 text-sm">Companies</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-pink-600">50K+</h3>
              <p className="text-gray-500 text-sm">Candidates</p>
            </div>
          </div>

          {/* Button */}
          <button className="w-fit bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition">
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
};

  // Blog Page

 const BlogPage = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-900/70 to-purple-900/80"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 text-white">
        {/* Page Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 tracking-wide">
            Our Latest Blogs
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Career tips, interview guidance, and resume strategies to help you
            grow professionally.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Blog Card */}
          <div className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-lg hover:scale-105 transition duration-500">
            <span className="text-sm text-blue-400 font-semibold uppercase">
              Resume
            </span>
            <h3 className="text-2xl font-bold mt-4 group-hover:text-blue-400 transition">
              How to Write a Great Resume
            </h3>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Tips and tricks for creating an impressive resume that stands out
              from the crowd.
            </p>
            <button className="mt-6 inline-flex items-center text-blue-400 font-semibold hover:underline">
              Read More →
            </button>
          </div>

          {/* Blog Card */}
          <div className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-lg hover:scale-105 transition duration-500">
            <span className="text-sm text-green-400 font-semibold uppercase">
              Interview
            </span>
            <h3 className="text-2xl font-bold mt-4 group-hover:text-green-400 transition">
              Top 10 Interview Questions
            </h3>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Prepare for your next interview with these commonly asked
              questions and answers.
            </p>
            <button className="mt-6 inline-flex items-center text-green-400 font-semibold hover:underline">
              Read More →
            </button>
          </div>

          {/* Blog Card */}
          <div className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-lg hover:scale-105 transition duration-500">
            <span className="text-sm text-purple-400 font-semibold uppercase">
              Career
            </span>
            <h3 className="text-2xl font-bold mt-4 group-hover:text-purple-400 transition">
              Career Growth Strategies
            </h3>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Learn how to advance your career in today’s competitive job
              market.
            </p>
            <button className="mt-6 inline-flex items-center text-purple-400 font-semibold hover:underline">
              Read More →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};



  // Profile Page
const ProfilePage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative bg-center bg-cover bg-repeat"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(15, 23, 42, 0.65),
            rgba(15, 23, 42, 0.65)
          ),
          url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1600&q=80')
        `,
      }}
    >
      {/* Profile Card */}
      <div className="relative max-w-4xl w-full rounded-3xl p-10
        bg-white/20 backdrop-blur-2xl
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        border border-white/30">

        {/* Header */}
        <div className="flex items-center gap-6 mb-10">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            S
          </div>

          <div>
            <h1 className="text-4xl font-extrabold text-gray-800">
              Your Profile
            </h1>
            <p className="text-gray-600">
              Manage your personal information
            </p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-white/70 p-6 rounded-xl shadow-sm">
            <h3 className="text-sm text-gray-500 mb-1">Name</h3>
            <p className="text-xl font-semibold text-gray-800">
              SURYA
            </p>
          </div>

          <div className="bg-white/70 p-6 rounded-xl shadow-sm">
            <h3 className="text-sm text-gray-500 mb-1">Email</h3>
            <p className="text-xl font-semibold text-gray-800">
              sahayaarun@gmail.com
            </p>
          </div>

          <div className="bg-white/70 p-6 rounded-xl shadow-sm">
            <h3 className="text-sm text-gray-500 mb-1">Role</h3>
            <p className="text-xl font-semibold text-gray-800">
              Employee
            </p>
          </div>

          <div className="bg-white/70 p-6 rounded-xl shadow-sm">
            <h3 className="text-sm text-gray-500 mb-1">Status</h3>
            <p className="text-xl font-semibold text-green-600">
              Active
            </p>
          </div>

        </div>

        {/* Button */}
        <div className="mt-12 text-right">
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition">
            Edit Profile
          </button>
        </div>

      </div>
    </div>
  );
};



   // Contact Page
 const ContactPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Glass Card */}
      <div className="relative z-10 bg-white/20 backdrop-blur-xl max-w-3xl w-full rounded-2xl shadow-2xl p-10">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            Contact Us
          </h1>
          <p className="text-gray-800">
            We’d love to hear from you. Please fill out the form below.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none bg-white"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none bg-white"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none bg-white"
            />
          </div>

          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 rounded-lg shadow hover:opacity-90 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

 return (
    <div className="font-sans min-h-screen bg-white">
      <Navbar />
      {currentPage === "home" && <HomePage />}
      {currentPage === "about" && <AboutPage />}
      {currentPage === "blog" && <BlogPage />}
      {currentPage === "contact" && <ContactPage />}
      {currentPage === "profile" && <ProfilePage />}
    </div>
  );
};

export default EmployeeDashboard;