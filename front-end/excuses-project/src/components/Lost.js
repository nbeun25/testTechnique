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
        <div className="app">
            <h1>I'm Lost</h1>

            <img src="../img/what-huh.gif" alt="Gif i'm lost - John Travolta" /> 
        </div>
    )
}