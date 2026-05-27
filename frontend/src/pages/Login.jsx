import { useState } from "react";

import {
    useNavigate,
    Link
} from "react-router-dom";

import axios from "axios";

import "../styles/Auth.css";


function Login() {

    const navigate = useNavigate();

    // =========================
    // STATE
    // =========================
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);


    // =========================
    // LOGIN FUNCTION
    // =========================
    const handleLogin = async () => {

        // VALIDATION
        if (!email || !password) {

            alert("Please fill all fields");

            return;
        }

        try {

            setLoading(true);

            // API CALL
            const response = await axios.post(

                "http://127.0.0.1:8000/api/users/login/",

                {
                    email: email,
                    password: password
                }
            );

            console.log(response.data);

            // =========================
            // SAVE USER DETAILS
            // =========================
            localStorage.setItem(
                "userName",
                response.data.user.name
            );

            localStorage.setItem(
                "userEmail",
                response.data.user.email
            );

            localStorage.setItem(
                "userMobile",
                response.data.user.mobile
            );

            // =========================
            // LOGIN FLAG
            // =========================
            localStorage.setItem(
                "isLoggedIn",
                "true"
            );

            alert("Login Successful ✅");

            // =========================
            // REDIRECT TO DASHBOARD
            // =========================
            navigate("/");

            // FORCE REFRESH
            window.location.reload();

        } catch (error) {

            console.log(error);

            alert(

                error.response?.data?.message ||

                "Invalid Email or Password ❌"
            );

        } finally {

            setLoading(false);
        }
    };


    return (

        <div className="auth-container">

            <div className="auth-card">

                <h1>🌿 ESG Login</h1>

                <p>
                    Login to your ESG Dashboard
                </p>

                {/* EMAIL */}
                <input

                    type="email"

                    placeholder="Enter Email"

                    value={email}

                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                {/* PASSWORD */}
                <input

                    type="password"

                    placeholder="Enter Password"

                    value={password}

                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                {/* LOGIN BUTTON */}
                <button
                    onClick={handleLogin}
                >

                    {
                        loading
                            ? "Logging in..."
                            : "Login"
                    }

                </button>

                {/* REGISTER */}
                <p className="auth-link">

                    Don't have an account?

                    <Link to="/register">
                        Register
                    </Link>

                </p>

            </div>

        </div>
    );
}

export default Login;