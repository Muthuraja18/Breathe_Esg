import axios from "axios";


// ==========================
// BASE API
// ==========================
const API = axios.create({

    baseURL:
        "http://127.0.0.1:8000/api/emissions/"

});


// ==========================
// GET EMISSIONS
// USER-WISE FILTER
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
