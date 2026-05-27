import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:8000/api/emissions/"
});

// GET ALL
export const getEmissions = () => API.get("");

// SUSPICIOUS
export const getSuspicious = () => API.get("suspicious/");

// APPROVE
export const approveRecord = (id) =>
    API.post(`approve/${id}/`);

// DASHBOARD STATS
export const getDashboardStats = () =>
    API.get("dashboard/");

export default API;