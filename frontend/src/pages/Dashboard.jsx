import { useEffect, useState } from "react";

import DashboardCards from "../components/DashboardCards";

import EmissionChart from "../components/EmissionChart";

import EmissionTable from "../components/EmissionTable";

import {
    getEmissions,
    approveRecord
} from "../api/api";


function Dashboard() {

    const [records, setRecords] = useState([]);

    // =========================
    // LOGGED USER EMAIL
    // =========================
    const userEmail =
        localStorage.getItem("userEmail");


    // =========================
    // FETCH DATA
    // =========================
    const fetchData = async () => {

        try {

            // SEND EMAIL
            const res =
                await getEmissions(userEmail);

            console.log(res.data);

            setRecords(
                res.data.data || []
            );

        } catch (error) {

            console.log(error);

        }
    };


    // =========================
    // LOAD DATA
    // =========================
    useEffect(() => {

        fetchData();

    }, []);


    // =========================
    // APPROVE RECORD
    // =========================
    const handleApprove = async (id) => {

        try {

            await approveRecord(id);

            alert(
                "Approved Successfully ✅"
            );

            // REFRESH DATA
            fetchData();

        } catch (error) {

            console.log(error);

        }
    };


    return (

        <div style={{ padding: "20px" }}>

            {/* DASHBOARD CARDS */}
            <DashboardCards
                data={records}
            />

            {/* CHART */}
            <EmissionChart
                data={records}
            />

            {/* TABLE */}
            <EmissionTable
                data={records}
                onApprove={handleApprove}
            />

        </div>
    );
}

export default Dashboard;