import { useState } from "react";
import { postJob } from "../JobService";

const EmployeeDashboard = () => {
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

if(!job.title || !job.qualification || !job.salary || !job.location) {
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

return (

<div className="font-sans min-h-screen bg-white">    
{/* Navbar */}    
<nav className="flex justify-between items-center px-10 py-5 border-b">    
<h1 className="text-2xl font-bold text-gray-800">JobPortal</h1>    
<div className="hidden md:flex space-x-8 text-gray-600 font-medium">    
<a href="#" className="hover:text-blue-600">Home</a>    
<a href="#" className="hover:text-blue-600">About</a>    
<a href="#" className="hover:text-blue-600">Blog</a>    
<a href="#" className="hover:text-blue-600">Contact</a>    
<button className="bg-blue-500 text-white px-4 py-2 rounded shadow">Post a job</button>    
<button className="bg-green-400 text-white px-4 py-2 rounded shadow">Want a Job</button>    
</div>    
</nav>  {/* Hero Section */}    <div       
    className="relative h-[550px] bg-cover bg-center flex items-center justify-center"      
    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1350&q=80')` }}      
  >      
    <div className="absolute inset-0 bg-black/40"></div>    <div className="relative z-10 text-center text-white w-full max-w-5xl px-4">      
  <p className="text-lg mb-4">We have 850,000 great job offers you deserve!</p>      
  <h2 className="text-5xl font-bold mb-12">Your Dream Job is Waiting</h2>      {/* Form Box */}

  <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl shadow-2xl">      
    <div className="bg-white p-6 rounded-lg grid grid-cols-1 md:grid-cols-5 gap-4 items-end">      <div className="text-left">      
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
  {/* Footer Icons Section */}    
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-20 px-4">      
    <div className="text-center group">      
      <div className="text-blue-500 text-4xl mb-4 group-hover:scale-110 transition">📋</div>      
      <h4 className="font-bold text-gray-800">Search Millions of Jobs</h4>      
    </div>      
    <div className="text-center group">      
      <div className="text-blue-500 text-4xl mb-4 group-hover:scale-110 transition">⚙️</div>      
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
</div>  );  
};  export default EmployeeDashboard;