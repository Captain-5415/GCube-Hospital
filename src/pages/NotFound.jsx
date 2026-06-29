import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
    return (
        <div className="not-found">

            <div className="not-found-content">

                <h1>404</h1>

                <h2>Page Not Found</h2>

                <p>
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>

                <Link to="/" className="home-btn">
                    Back to Home
                </Link>

            </div>

        </div>
    );
}