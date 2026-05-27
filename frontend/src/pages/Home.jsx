import UploadForm from "../components/UploadForm";

function Home({ setRecords }) {

    return (

        <div>

            <UploadForm setRecords={setRecords} />

        </div>
    );
}

export default Home;