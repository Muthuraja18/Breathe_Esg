import axios from "axios";

const API = axios.create({
    baseURL: "https://muthuraja18-breathe.hf.space/api/emissions/",
    headers: {
        "Content-Type": "application/json",
    },
});

// ==========================
// GET EMISSIONS
// ==========================
export const getEmissions = (email) =>
    API.get(`?email=${email}`);

// ==========================
// APPROVED RECORDS
// ==========================
export const getApprovedRecords = (email) =>
    API.get(`approved/?email=${email}`);

// ==========================
// SUSPICIOUS RECORDS
// ==========================
export const getSuspicious = (email) =>
    API.get(`suspicious/?email=${email}`);

// ==========================
// APPROVE RECORD
// ==========================
export const approveRecord = (id) =>
    API.post(`approve/${id}/`);

// ==========================
// DASHBOARD STATS
// ==========================
export const getDashboardStats = (email) =>
    API.get(`dashboard/?email=${email}`);

export default API;
