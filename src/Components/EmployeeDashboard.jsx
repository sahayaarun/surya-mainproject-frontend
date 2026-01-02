import { useState } from "react";
import { postJob } from "../JobService";

const EmployeeDashboard = () => {
  const [currentPage, setCurrentPage] = useState("home");
  
  // Job state and handle functions
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
    <nav className="flex justify-between items-center px-10 py-5 border-b bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-gray-800 italic">JobPortal 📊</h1>
      <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
        <button onClick={() => setCurrentPage("home")} className={`hover:text-blue-600 ${currentPage === 'home' ? 'text-blue-600 font-bold' : ''}`}>Home</button>
        <button onClick={() => setCurrentPage("about")} className={`hover:text-blue-600 ${currentPage === 'about' ? 'text-blue-600 font-bold' : ''}`}>About</button>
        <button onClick={() => setCurrentPage("blog")} className={`hover:text-blue-600 ${currentPage === 'blog' ? 'text-blue-600 font-bold' : ''}`}>Blog</button>
        <button onClick={() => setCurrentPage("profile")} className={`hover:text-blue-600 ${currentPage === 'profile' ? 'text-blue-600 font-bold' : ''}`}>Profile</button>
        <button onClick={() => setCurrentPage("contact")} className={`hover:text-blue-600 ${currentPage === 'contact' ? 'text-blue-600 font-bold' : ''}`}>Contact</button>
      </div>
    </nav>
  );

  // Home Page - Form Optimized for fast typing
  const HomePage = () => (
    <>
      <div
        className="relative h-[550px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white w-full max-w-5xl px-4">
          <h2 className="text-5xl font-bold mb-12">POST YOUR JOB FOR ADMIN APPROVAL 🗽</h2>
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
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded transition duration-200 uppercase tracking-wider shadow-md active:scale-95"
              >
                Post Job
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Icons */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-20 px-4">
        <div className="text-center group"><div className="text-blue-500 text-4xl mb-4 group-hover:scale-110 transition cursor-default">📋</div><h4 className="font-bold text-gray-800 italic">Search Millions of Jobs</h4></div>
        <div className="text-center group"><div className="text-blue-500 text-4xl mb-4 group-hover:scale-110 transition cursor-default">⚙️</div><h4 className="font-bold text-gray-800 italic">Easy To Manage Jobs</h4></div>
        <div className="text-center group"><div className="text-blue-500 text-4xl mb-4 group-hover:scale-110 transition cursor-default">🎓</div><h4 className="font-bold text-gray-800 italic">Top Careers</h4></div>
        <div className="text-center group"><div className="text-blue-500 text-4xl mb-4 group-hover:scale-110 transition cursor-default">👤</div><h4 className="font-bold text-gray-800 italic">Search Expert Candidates</h4></div>
      </div>
    </>
  );

  // About Page (Keep Original Styles)
  const AboutPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center px-6 py-16">
      <div className="bg-white max-w-6xl w-full rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" alt="Team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-4xl font-extrabold text-center px-6 italic">Empowering Careers,<br />Connecting Talent</h2>
          </div>
        </div>
        <div className="p-12 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6 italic underline decoration-blue-500">About JobPortal</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">JobPortal is a trusted platform designed to connect talented individuals with top employers.</p>
          <div className="grid grid-cols-3 gap-6 text-center mb-8">
            <div><h3 className="text-3xl font-bold text-blue-600">10K+</h3><p className="text-gray-500 text-sm">Jobs Posted</p></div>
            <div><h3 className="text-3xl font-bold text-purple-600">5K+</h3><p className="text-gray-500 text-sm">Companies</p></div>
            <div><h3 className="text-3xl font-bold text-pink-600">50K+</h3><p className="text-gray-500 text-sm">Candidates</p></div>
          </div>
        </div>
      </div>
    </div>
  );

  // Blog Page (Keep Original Styles)
  const BlogPage = () => (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')" }}>
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-900/70 to-purple-900/80"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-20 text-white text-center font-sans">
        <h1 className="text-5xl font-extrabold mb-16 italic">Our Latest Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-lg hover:bg-white/20 transition cursor-default">
            <span className="text-blue-400 font-semibold uppercase italic tracking-widest">Resume</span>
            <h3 className="text-2xl font-bold mt-4">How to Write a Great Resume</h3>
            <p className="text-gray-300 mt-4 leading-relaxed italic">Tips for creating an impressive resume that grabs attention.</p>
          </div>
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-lg hover:bg-white/20 transition cursor-default">
            <span className="text-green-400 font-semibold uppercase italic tracking-widest">Interview</span>
            <h3 className="text-2xl font-bold mt-4">Top 10 Interview Questions</h3>
            <p className="text-gray-300 mt-4 leading-relaxed italic">Prepare for your next interview and answer with confidence.</p>
          </div>
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-lg hover:bg-white/20 transition cursor-default">
            <span className="text-purple-400 font-semibold uppercase italic tracking-widest">Career</span>
            <h3 className="text-2xl font-bold mt-4">Career Growth Strategies</h3>
            <p className="text-gray-300 mt-4 leading-relaxed italic">Advance your career in today's competitive job market.</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Profile Page (Optimized Styles)
  const ProfilePage = () => (
    <div className="min-h-screen flex items-center justify-center px-4 relative bg-center bg-cover" 
      style={{ backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.65)), url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1600&q=80')" }}>
      <div className="relative max-w-4xl w-full rounded-3xl p-10 bg-white/20 backdrop-blur-2xl border border-white/30 shadow-2xl">
        <div className="flex items-center gap-6 mb-10">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold border-4 border-white/40">S</div>
          <div><h1 className="text-4xl font-extrabold text-white italic">Your Profile</h1><p className="text-gray-200">Personal Account Information</p></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/70 p-6 rounded-xl shadow-inner"><h3 className="text-sm text-gray-500 font-bold uppercase tracking-widest">Name</h3><p className="text-xl font-bold text-gray-800 uppercase italic">SURYA</p></div>
          <div className="bg-white/70 p-6 rounded-xl shadow-inner"><h3 className="text-sm text-gray-500 font-bold uppercase tracking-widest">Email</h3><p className="text-xl font-bold text-gray-800 italic">sahayaarun@gmail.com</p></div>
          <div className="bg-white/70 p-6 rounded-xl shadow-inner"><h3 className="text-sm text-gray-500 font-bold uppercase tracking-widest">Role</h3><p className="text-xl font-bold text-gray-800 italic">Employee / Recruiter</p></div>
          <div className="bg-white/70 p-6 rounded-xl shadow-inner"><h3 className="text-sm text-gray-500 font-bold uppercase tracking-widest">Status</h3><p className="text-xl font-bold text-green-600 uppercase italic tracking-widest">Active</p></div>
        </div>
      </div>
    </div>
  );

  // Contact Page (Keep Original Styles)
  const ContactPage = () => (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center relative px-4" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80')" }}>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 bg-white/20 backdrop-blur-xl max-w-3xl w-full rounded-2xl p-10 shadow-2xl border border-white/20">
        <h1 className="text-4xl font-extrabold text-white text-center mb-8 italic">Contact Us</h1>
        <form className="space-y-6">
          <input type="text" placeholder="Your Name" className="w-full p-4 rounded-lg outline-none bg-white/90 focus:ring-2 focus:ring-blue-400" />
          <input type="email" placeholder="your@email.com" className="w-full p-4 rounded-lg outline-none bg-white/90 focus:ring-2 focus:ring-blue-400" />
          <textarea rows="5" placeholder="Your message..." className="w-full p-4 rounded-lg outline-none bg-white/90 focus:ring-2 focus:ring-blue-400" />
          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 rounded-lg hover:opacity-90 transition shadow-lg active:scale-95">Send Message</button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="font-sans min-h-screen bg-white selection:bg-blue-100">
      <Navbar />
      <div className="animate-in fade-in duration-500">
        {currentPage === "home" && <HomePage />}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "blog" && <BlogPage />}
        {currentPage === "contact" && <ContactPage />}
        {currentPage === "profile" && <ProfilePage />}
      </div>
    </div>
  );
};

export default EmployeeDashboard;