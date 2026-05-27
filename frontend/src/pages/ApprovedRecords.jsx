import { useEffect, useState } from "react";

import {
    getApprovedRecords
} from "../api/api";

function ApprovedRecords() {

    const [records, setRecords] = useState([]);

    const fetchApproved = async () => {

        try {

            const res = await getApprovedRecords();

            setRecords(res.data.data || []);

        } catch (error) {

            console.log(error);

        }
    };

    useEffect(() => {

        fetchApproved();

    }, []);

    return (

        <div style={{ padding: "20px" }}>

            <h2>✅ Approved Records</h2>

            <table
                border="1"
                cellPadding="10"
                style={{
                    width: "100%",
                    borderCollapse: "collapse"
                }}
            >

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Source</th>
                        <th>Activity</th>
                        <th>Scope</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>CO2E</th>
                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {records.map((item) => (

                        <tr key={item.id}>

                            <td>{item.id}</td>

                            <td>{item.source_type}</td>

                            <td>{item.activity_type}</td>

                            <td>{item.scope}</td>

                            <td>{item.quantity}</td>

                            <td>{item.unit}</td>

                            <td>{item.co2e}</td>

                            <td>
                                ✅ {item.review_status}
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default ApprovedRecords;