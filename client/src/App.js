import Navbar from "./components/layout/Navbar";
import { useDispatch } from "react-redux";
import "antd/dist/antd.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Route
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import UserRoute from "./components/routes/UserRoute";
import AdminRoute from "./components/routes/AdminRoute";

//Page
import { currentUser } from "./components/function/auth";
import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";
import Home from "./components/Home";
import AdminDashboard from "./components/pages/admin/AdminDashboard";
import UserDashboard from "./components/pages/users/UserDashboard";

//Redux
import { login } from "./store/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const idTokenResult = localStorage.token;
    // console.log('APP',idTokenResult)
    if (idTokenResult) {
      currentUser(idTokenResult)
        .then((res) => {
          // console.log('APP',res)
          dispatch(
            login({
              token: idTokenResult,
              name: res.data.name,
              role: res.data.role,
              id: res.data._id,
            })
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/users"
          element={
            <UserRoute>
              <UserDashboard />
            </UserRoute>
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
