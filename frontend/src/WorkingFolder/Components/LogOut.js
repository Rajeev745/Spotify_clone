import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LogOut() {
  let navigate = useNavigate();
    const handleLogout = () => {
      // sessionStorage.removeItem("Auth Token");
      navigate("/login");
    };
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    console.log(authToken);
    if (authToken) {
      navigate("/");
    }
    if (!authToken) {
      navigate("/signup");
    }
  }, []);
  return <div
   onClick={handleLogout}
   >Log out</div>;
}
