import { useState } from "react";

import axios from "axios";

function UploadForm({ setRecords }) {

    const [file, setFile] = useState(null);

    const handleUpload = async () => {

        if (!file) {

            alert("Select CSV");

            return;
        }

        const formData = new FormData();

        formData.append("file", file);

        try {

            const response = await axios.post(

                "http://127.0.0.1:8000/api/ingestion/upload/",

                formData,

                {
                    headers: {
                        "Content-Type":
                        "multipart/form-data",
                    },
                }
            );

            console.log(response.data);

            setRecords(
                response.data.uploaded_data
            );

            alert("Upload Success");

        } catch (error) {

            console.log(error);

            alert("Upload Failed");
        }
    };

    return (

        <div style={{ padding: "20px" }}>

            <h2>Upload CSV</h2>

            <input
                type="file"
                onChange={(e) =>
                    setFile(e.target.files[0])
                }
            />

            <br /><br />

            <button onClick={handleUpload}>
                Upload
            </button>

        </div>
    );
}

export default UploadForm;