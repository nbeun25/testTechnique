import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  // useNavigate permet la redirection
  const navigate = useNavigate();

  // Utilisation de setTimeout afin de rediriger l'utilisateur après 5s sur cette page
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className="app">
      <h1>I'm Lost</h1>
      <img src="../img/what-huh.gif" alt="Gif i'm lost - John Travolta" />
    </div>
  );
}
