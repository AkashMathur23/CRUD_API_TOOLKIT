import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../features/userDetailsSlice";
import CustomModal from "./CustomModal";

const Read = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState();

  /* from app we are getting user data as user and loading */ const {
    users,
    loading,
  } = useSelector((state) => state.app); //getting data from store/app/useDetail/userDetailSlice

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading....</h2>;
  }

  return (
    <div>
      <CustomModal />
      <h1>All Data</h1>

      <div>
        {users &&
          users.map((user) => (
            <div
              className="card w-50 mx-auto"
              style={{ backgroundColor: "lightGrey", display: "flex" }}
              key={user.id}
            >
              <div className="card-body">
                <h5 className="card-title">{user.id}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {user.employee_name}
                </h6>
                <h4>{user.employee_salary}</h4>
                <h4>{user.employee_age}</h4>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <button className="card-link" onClick={() => setId(user.id)}>
                    View
                  </button>
                  <button className="card-link">Edit</button>
                  <button className="card-link">Delete</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Read;
