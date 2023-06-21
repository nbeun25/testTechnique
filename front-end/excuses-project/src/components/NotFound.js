import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate(); 

    // Utilisation du useEffect afin de faire la redirection automatique
    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => {
            clearTimeout(timeout);
        }
    }, [navigate]);

    return (
        <div className="notFound">
            <h2>Not Found Page</h2>
        </div>
    )
}