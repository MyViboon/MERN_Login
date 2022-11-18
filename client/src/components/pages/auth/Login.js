import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

//Function
import { loginHandler } from "../../function/auth";
//Redux
import { login } from "../../../store/userSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { name, password } = formData;

  const roleBaseRedirect = (res) => {
    if (res === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/users");
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const newUser = {
      name,
      password,
    };
    loginHandler(newUser)
      .then((res) => {
        setLoading(false);
        dispatch(
          login({
            token: res.data.token,
            name: res.data.payload.user.name,
            role: res.data.payload.user.role,
            id: res.data.payload.user._id
          })
        );
        localStorage.setItem("token", res.data.token);
        console.log("เข้าสู่ระบบ", res.data);
        toast.success("Login Success!", {
          theme: "colored",
        });
        roleBaseRedirect(res.data.payload.user.role)
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        toast.error(err.response.data);
      });
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {!loading ? <h1>Login</h1> : <h1>loading...</h1>}

          <form onSubmit={(e) => onSubmit(e)}>
            <input
              className="form-control mb-3 mt-3"
              type="text"
              name="name"
              autoFocus
              placeholder="Username"
              onChange={(e) => onChange(e)}
            />
            <input
              className="form-control mb-3"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => onChange(e)}
            />

            <button className="btn btn-success" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
