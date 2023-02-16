import React, { useState, useEffect } from "react";

const AdminRoute = ({ component, isEnabled }) => {
  const token = sessionStorage.getItem("access_token");
  const currentUser = sessionStorage.getItem("current_user")
    ? sessionStorage.getItem("current_user")
    : null;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const authUser = async () => {
    if (currentUser === null) return;

    const url = `${processprocess.env.BACKEND_URL}/api/isauth/${currentUser}`;

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      setIsAuthenticated(data.auth);
      setIsAdmin(data.is_admin);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isEnabled) {
      authUser();
    }
    if (isAuthenticated === false) {
      window.location.href = "/login";
    }
  }, []);

  return isEnabled === true
    ? isAuthenticated === true && isAdmin === true
      ? component
      : null
    : component;
};
export default AdminRoute;
