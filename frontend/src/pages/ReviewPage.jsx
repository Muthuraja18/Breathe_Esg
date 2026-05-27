import React, { useEffect, useState } from "react";
import { getEmissions, approveRecord } from "../api/api";

function ReviewPage() {

    const [data, setData] = useState([]);

    const loadData = async () => {
        try {
            const res = await getEmissions();

            // ✅ FIX: correct data path
            setData(res.data.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleApprove = async (id) => {
        try {
            await approveRecord(id);
            alert("Approved Successfully ✅");
            loadData();
        } catch (error) {
            console.log(error);
            alert("Approve failed ❌");
        }
    };

    return (
        <div style={{ padding: "20px" }}>

            <h2>📄 Review Emission Records</h2>

            <table border="1" cellPadding="10"
                style={{ width: "100%", borderCollapse: "collapse" }}>

                <thead style={{ backgroundColor: "#222", color: "white" }}>
                    <tr>
                        <th>ID</th>
                        <th>Activity</th>
                        <th>Scope</th>
                        <th>CO2e</th>
                        <th>Suspicious</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {data && data.length > 0 ? (

                        data
                        // ✅ OPTIONAL FILTER (recommended)
                        .filter(item => item.review_status === "PENDING")
                        .map((item) => (

                            <tr key={item.id}>

                                <td>{item.id}</td>
                                <td>{item.activity_type}</td>
                                <td>{item.scope}</td>
                                <td>{item.co2e}</td>

                                <td>
                                    {item.is_suspicious ? "⚠️ Yes" : "No"}
                                </td>

                                <td>
                                    {item.review_status}
                                </td>

                                <td>
                                    <button
                                        onClick={() => handleApprove(item.id)}
                                        style={{
                                            backgroundColor: "green",
                                            color: "white",
                                            border: "none",
                                            padding: "5px 10px",
                                            cursor: "pointer"
                                        }}
                                    >
                                        Approve
                                    </button>
                                </td>

                            </tr>

                        ))

                    ) : (

                        <tr>
                            <td colSpan="7" style={{ textAlign: "center" }}>
                                No pending records
                            </td>
                        </tr>

                    )}

                </tbody>

            </table>

        </div>
    );
}

export default ReviewPage;