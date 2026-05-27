import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import axios from "axios";

import "../styles/Auth.css";


function Register() {

    const navigate = useNavigate();

    // =========================
    // FORM STATE
    // =========================
    const [formData, setFormData] = useState({

        name: "",

        email: "",

        mobile: "",

        password: "",

        confirmPassword: ""

    });


    // =========================
    // HANDLE INPUT CHANGE
    // =========================
    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });
    };


    // =========================
    // REGISTER USER
    // =========================
    const handleSubmit = async (e) => {

        e.preventDefault();

        // PASSWORD MATCH CHECK
        if (
            formData.password !==
            formData.confirmPassword
        ) {

            alert("Passwords do not match ❌");

            return;
        }

        try {

            const response = await axios.post(

                "http://127.0.0.1:8000/api/users/register/",

                {

                    name: formData.name,

                    email: formData.email,

                    mobile: formData.mobile,

                    password: formData.password

                }

            );

            console.log(response.data);

            alert("Registration Successful ✅");

            // REDIRECT TO LOGIN
            navigate("/login");

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Registration Failed ❌"
            );
        }
    };


    return (

        <div className="auth-container">

            <div className="auth-card">

                <h1>🌿 ESG Register</h1>

                <p>Create your ESG analyst account</p>

                <form onSubmit={handleSubmit}>

                    {/* NAME */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    {/* EMAIL */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    {/* MOBILE */}
                    <input
                        type="text"
                        name="mobile"
                        placeholder="Enter Mobile Number"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                    />

                    {/* PASSWORD */}
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    {/* CONFIRM PASSWORD */}
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />

                    {/* BUTTON */}
                    <button type="submit">

                        Register

                    </button>

                </form>

                <p className="auth-link">

                    Already have an account?

                    <Link to="/login">
                        Login
                    </Link>

                </p>

            </div>

        </div>
    );
}

export default Register;