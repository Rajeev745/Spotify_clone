import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LogOut() {
  //   const handleLogout = () => {
  //     sessionStorage.removeItem("Auth Token");
  //     navigate("/login");
  //   };
  // let navigate = useNavigate();
  // useEffect(() => {
  //   let authToken = sessionStorage.getItem("Auth Token");
  //   console.log(authToken);
  //   if (authToken) {
  //     navigate("/");
  //   }
  //   if (!authToken) {
  //     navigate("/signup");
  //   }
  // }, []);
  return <div>Log out</div>;
}
