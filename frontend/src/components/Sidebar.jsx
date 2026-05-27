import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {

    return (
        <div style={{
            width: "200px",
            height: "100vh",
            background: "#111",
            color: "white",
            padding: "20px",
            position: "fixed"
        }}>

            <h3>ESG Menu</h3>

            <ul style={{ listStyle: "none", padding: 0 }}>

                <li><Link to="/" style={{ color: "white" }}>Dashboard</Link></li>

                <li><Link to="/review" style={{ color: "white" }}>Review</Link></li>

                <li><Link to="/suspicious" style={{ color: "white" }}>Suspicious</Link></li>

                <li><Link to="/login" style={{ color: "white" }}>Login</Link></li>

            </ul>

        </div>
    );
}

export default Sidebar;