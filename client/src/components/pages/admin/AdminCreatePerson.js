import React, { useState } from "react";
import { createPerson } from "../../function/person";
import AdminNav from "../../layout/AdminNav";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const AdminCreatePerson = () => {
  const { userAuth } = useSelector((state) => ({ ...state }));
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    createPerson({ name }, userAuth.user.token)
      .then((res) => {
        setLoading(true);
        console.log(res);
        toast.success('Create '+ res.data.name+' Success')
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.response);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          <h1>Admin CreatePerson</h1>

          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>ชื่อ</label>
              <input
                type="text"
                className="form-control"
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button className="btn btn-outline-primary mt-3">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminCreatePerson;
