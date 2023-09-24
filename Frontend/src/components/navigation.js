import React from "react";
import "../style/header.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../features/authSlice";

const Navigation = () => {
  const token = useSelector((state) => state.auth.token);
  const dataUser = useSelector((state) => state.auth.dataUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLogout({ token }));
  };

  console.log(dataUser);

  return (
    <>
      {token && (
        <Link className="main-nav-item" to="/profile">
          <button className="nav-button">{dataUser.firstName}</button>
        </Link>
      )}

      <Link
        className="main-nav-item"
        to={token ? "/" : "/login"}
        onClick={handleLogout}
      >
        {token ? "Sign Out" : "Sign In"}
      </Link>
    </>
  );
};

export default Navigation;
