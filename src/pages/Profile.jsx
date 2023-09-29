import { useAuth } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? (
    <>
      <div>
        <img src={`${user.avatar}`} alt={user.name} />
      </div>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
      <div>
        <button onClick={handleClick}>Log Out</button>
      </div>
    </>
  ) : null;
};

export default Profile;
