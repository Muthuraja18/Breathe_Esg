import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Legend
} from "recharts";

function EmissionChart({ data }) {

    // Group data by activity_type (important for clean analytics)
    const groupedData = Object.values(
        data.reduce((acc, item) => {

            const key = item.activity_type;

            if (!acc[key]) {
                acc[key] = {
                    activity_type: key,
                    co2e: 0
                };
            }

            acc[key].co2e += item.co2e;

            return acc;
        }, {})
    );

    return (

        <div style={{ padding: "20px" }}>

            <h2>📊 Emission Analytics</h2>

            <BarChart
                width={700}
                height={300}
                data={groupedData}
            >

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="activity_type" />

                <YAxis />

                <Tooltip />

                <Legend />

                <Bar dataKey="co2e" fill="#8884d8" />

            </BarChart>

        </div>
    );
}

export default EmissionChart;