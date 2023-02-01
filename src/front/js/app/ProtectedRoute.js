import React from "react";
import { useState, useEffect } from "react";

const ProtectedRoute = ({ component, enabledProtection }) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const token = sessionStorage.getItem("access_token");
  const currentUser = sessionStorage.getItem("current_user");

  const authUser = async () => {
    if (!currentUser) return;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/isauth/${currentUser}`,
      options
    );
    const data = await response.json();
    setIsAuthenticated(data.auth);
  };

  useEffect(() => {
    if (enabledProtection) {
      authUser();
    }
    if (isAuthenticated === false) {
      window.location.href = "/login";
    }
  }, []);

  return enabledProtection ? (isAuthenticated ? component : null) : component;
};

export default ProtectedRoute;
