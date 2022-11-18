import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";
import { currentAdmin } from "../function/auth";

const AdminRoute = ({ children }) => {
  const { userAuth } = useSelector((state) => ({ ...state }));
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (userAuth.user && userAuth.user.token) {
      currentAdmin(userAuth.user.token)
        .then((res) => {
          console.log("Admin OK", res);
          setOk(true);
        })
        .catch((err) => {
          console.log("admin ERROR", err);
          setOk(false);
        });
    }
  }, [userAuth.user]);

  return userAuth.user && userAuth.user.token && ok ? children : <LoadingToRedirect />;

};

export default AdminRoute;
