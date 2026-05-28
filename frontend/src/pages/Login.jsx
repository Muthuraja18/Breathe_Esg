import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../styles/Auth.css";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }

        try {
            setLoading(true);

            const response = await axios.post(
                "https://muthuraja18-breathe.hf.space/api/users/login/",
                {
                    email,
                    password
                }
            );

            console.log(response.data);

            // save user
            localStorage.setItem("userName", response.data.user.name);
            localStorage.setItem("userEmail", response.data.user.email);
            localStorage.setItem("userMobile", response.data.user.mobile);
            localStorage.setItem("isLoggedIn", "true");

            alert("Login Successful ✅");

            navigate("/");
            window.location.reload();

        } catch (error) {
            console.log(error);

            alert(
                error.response?.data?.message ||
                "Invalid credentials"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">

                <h1>🌿 ESG Login</h1>
                <p>Login to your ESG Dashboard</p>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleLogin}>
                    {loading ? "Logging in..." : "Login"}
                </button>

                <p className="auth-link">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>

            </div>
        </div>
    );
}

export default Login;
