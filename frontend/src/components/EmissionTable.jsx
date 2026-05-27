import React from "react";
import { approveRecord } from "../api";

function EmissionTable({ data, reload }) {

    const handleApprove = async (id) => {
        try {
            await approveRecord(id);

            alert("Approved Successfully ✅");

            // refresh table after approve
            if (reload) reload();

        } catch (error) {
            console.log("Approve error:", error.response?.data || error.message);
            alert("Approve failed ❌");
        }
    };

    return (
        <div style={{ padding: "20px" }}>

            <h2>Emission Records</h2>

            <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>

                <thead style={{ backgroundColor: "#222", color: "white" }}>
                    <tr>
                        <th>ID</th>
                        <th>Activity</th>
                        <th>Scope</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>CO2E</th>
                        <th>Suspicious</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {data && data.length > 0 ? (
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.activity_type}</td>
                                <td>{item.scope}</td>
                                <td>{item.quantity}</td>
                                <td>{item.unit}</td>
                                <td>{item.co2e}</td>
                                <td>{item.is_suspicious ? "Yes ⚠️" : "No"}</td>

                                <td>
                                    <button
                                        onClick={() => handleApprove(item.id)}
                                        style={{
                                            backgroundColor: "green",
                                            color: "white",
                                            padding: "5px 10px",
                                            border: "none",
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
                            <td colSpan="8" style={{ textAlign: "center" }}>
                                No uploaded data
                            </td>
                        </tr>
                    )}
                </tbody>

            </table>

        </div>
    );
}

export default EmissionTable;