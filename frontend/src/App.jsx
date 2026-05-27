import { useState } from "react";

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate
} from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ReviewPage from "./pages/ReviewPage";
import ApprovedRecords from "./pages/ApprovedRecords";


function App() {

    const [records, setRecords] = useState([]);

    // CHECK LOGIN
    const isLoggedIn =
        localStorage.getItem("userEmail");

    return (

        <BrowserRouter>

            {/* SHOW NAVBAR ONLY AFTER LOGIN */}
            {isLoggedIn && (

                <div style={{

                    padding: "15px",

                    background: "#0f172a",

                    display: "flex",

                    gap: "20px",

                    alignItems: "center"

                }}>

                    <Link
                        to="/"
                        style={{
                            color: "white",
                            textDecoration: "none"
                        }}
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/review"
                        style={{
                            color: "white",
                            textDecoration: "none"
                        }}
                    >
                        Review
                    </Link>

                    <Link
                        to="/approved"
                        style={{
                            color: "white",
                            textDecoration: "none"
                        }}
                    >
                        Approved
                    </Link>

                    {/* LOGOUT */}
                    <button

                        onClick={() => {

                            localStorage.clear();

                            window.location.href =
                                "/login";
                        }}

                        style={{

                            marginLeft: "auto",

                            padding: "8px 15px",

                            background: "red",

                            color: "white",

                            border: "none",

                            borderRadius: "8px",

                            cursor: "pointer"
                        }}
                    >

                        Logout

                    </button>

                </div>
            )}

            <Routes>

                {/* LOGIN */}
                <Route

                    path="/login"

                    element={
                        isLoggedIn
                            ? <Navigate to="/" />
                            : <Login />
                    }
                />

                {/* REGISTER */}
                <Route

                    path="/register"

                    element={
                        isLoggedIn
                            ? <Navigate to="/" />
                            : <Register />
                    }
                />

                {/* DASHBOARD */}
                <Route

                    path="/"

                    element={

                        isLoggedIn ? (

                            <div>

                                <Home
                                    setRecords={setRecords}
                                />

                                <Dashboard
                                    records={records}
                                    setRecords={setRecords}
                                />

                            </div>

                        ) : (

                            <Navigate to="/login" />

                        )
                    }
                />

                {/* REVIEW */}
                <Route

                    path="/review"

                    element={

                        isLoggedIn
                            ? <ReviewPage />
                            : <Navigate to="/login" />

                    }
                />

                {/* APPROVED */}
                <Route

                    path="/approved"

                    element={

                        isLoggedIn
                            ? <ApprovedRecords />
                            : <Navigate to="/login" />

                    }
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;