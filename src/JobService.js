import axios from "axios";

const API_URL = "/api/jobs";

/* =======================
   EMPLOYER
======================= */

// Job post (default status = pending)
export const postJob = (job) => {
  return axios.post(API_URL, job);
};

/* =======================
   JOB SEEKER
======================= */

// Only approved jobs
export const getApprovedJobs = () => {
  return axios.get(`${API_URL}/approved`);
};

/* =======================
   ADMIN
======================= */

// Admin – pending jobs
export const getPendingJobs = () => {
  return axios.get(`${API_URL}/admin/pending-jobs`);
};

// Admin – approve job
export const approveJob = (id) => {
  return axios.put(`${API_URL}/admin/approve/${id}`);
};