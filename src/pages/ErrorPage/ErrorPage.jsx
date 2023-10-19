import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">Oops!!!</h2>
            <p className="text-lg text-gray-600 mb-8">
                It seems like you have taken a wrong turn.
            </p>
            <Link
                to="/"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
                <i className="fas fa-home"></i> Go back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
