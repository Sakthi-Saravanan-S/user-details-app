import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById, clearUserDetails } from "../redux/userSlice";
import { ClipLoader } from "react-spinners";

const UserDetails = ({ isDarkMode }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.userDetails);
  const [loading, setLoading] = useState(true); // Manage loading state

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true); // Show spinner
      await dispatch(fetchUserById(id));
      setLoading(false); // Hide spinner after data is fetched
    };

    fetchUserData();

    // Cleanup function: Clear user data on unmount
    return () => {
      dispatch(clearUserDetails());
    };
  }, [dispatch, id]);

  if (loading) {
    // Show loading spinner if data is still being fetched
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <ClipLoader color="#007bff" size={50} />
      </div>
    );
  }

  return (
    <div
      className={isDarkMode ? "container dark-mode" : "container light-mode"}
    >
      {user ? (
        <div className="card-custom">
          <div className="card-header-custom">
            <h3>{user.name}</h3>
          </div>
          <div className="card-body-custom">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
          </div>
        </div>
      ) : (
        <p>User not found.</p>
      )}
    </div>
  );
};

export default UserDetails;
