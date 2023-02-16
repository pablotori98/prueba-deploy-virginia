import React, { useState, useEffect } from "react";

const AdminRoute = ({ component, isEnabled }) => {
  const token = sessionStorage.getItem("access_token");
  const currentUser = sessionStorage.getItem("current_user")
    ? sessionStorage.getItem("current_user")
    : null;
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);

  const authUser = async () => {
    if (currentUser === null) return;

    const url = `${process.env.BACKEND_URL}/api/isauth/${currentUser}`;

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
  }, []);

  useEffect(() => {
    if(isAuthenticated===false || isAdmin===false){
      window.location.href = "/"}
  }, [isAuthenticated, isAdmin]);

  return isEnabled === true
    ? isAuthenticated === true && isAdmin === true
      ? component
      : <h1> Acesso Denegado </h1>
    : component;
};
export default AdminRoute;
