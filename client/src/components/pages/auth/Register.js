import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

//Function
import { registerHandler } from "../../function/auth";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    password2: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const { name, password, password2 } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    if (password !== password2) {
      console.log("No match");
    } else {
      const newUser = {
        name,
        password,
      };
      registerHandler(newUser)
        .then((res) => {
          setLoading(false);
          console.log(res);
          toast.success(res.data);
          navigate('/')
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
          toast.error(err.response.data);
        });
    }
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {!loading ? <h1>Register</h1> : <h1>loading...</h1>}

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
            <input
              className="form-control mb-3"
              type="password"
              name="password2"
              placeholder="Confirm Password"
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

export default Register;
