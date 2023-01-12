import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Navigate, useLocation } from "react-router-dom";
const Error = () => {
  const [goHome, setGoHome] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/") {
      setGoHome(false);
    }
  }, [location]);

  if (goHome) {
    return <Navigate to="/" />;
  }
  return (
    <div className="error-container">
      <Header />

      <div className="error">404</div>
      <span>Oups! La page que vous demandez n'existe pas.</span>

      <p
        onClick={() => {
          setGoHome(true);
        }}
      >
        Retourner sur la page d’accueil
      </p>
    </div>
  );
};

export default Error;
