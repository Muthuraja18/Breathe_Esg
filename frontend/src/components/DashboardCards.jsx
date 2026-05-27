function DashboardCards({ data }) {

    // ✅ SAFETY FIX
    const records = Array.isArray(data) ? data : [];

    // ✅ DEBUG
    console.log("Dashboard Data:", records);

    // ✅ COUNTS
    const total = records.length;

    const suspicious = records.filter(
        item => item.is_suspicious === true
    ).length;

    const approved = records.filter(
        item => item.review_status === "APPROVED"
    ).length;

    const pending = records.filter(
        item => item.review_status === "PENDING"
    ).length;

    return (

        <div style={{ padding: "20px" }}>

            <h2>📊 Dashboard Overview</h2>

            <div style={{
                display: "flex",
                gap: "20px",
                marginTop: "10px",
                flexWrap: "wrap"
            }}>

                {/* TOTAL */}
                <div style={{
                    padding: "15px",
                    border: "1px solid black",
                    borderRadius: "10px",
                    minWidth: "180px"
                }}>
                    <h3>📄 Total Records</h3>
                    <h2>{total}</h2>
                </div>

                {/* SUSPICIOUS */}
                <div style={{
                    padding: "15px",
                    border: "1px solid red",
                    borderRadius: "10px",
                    minWidth: "180px"
                }}>
                    <h3>⚠️ Suspicious</h3>
                    <h2>{suspicious}</h2>
                </div>

                {/* APPROVED */}
                <div style={{
                    padding: "15px",
                    border: "1px solid green",
                    borderRadius: "10px",
                    minWidth: "180px"
                }}>
                    <h3>✅ Approved</h3>
                    <h2>{approved}</h2>
                </div>

                {/* PENDING */}
                <div style={{
                    padding: "15px",
                    border: "1px solid orange",
                    borderRadius: "10px",
                    minWidth: "180px"
                }}>
                    <h3>⏳ Pending</h3>
                    <h2>{pending}</h2>
                </div>

            </div>

        </div>
    );
}

export default DashboardCards;