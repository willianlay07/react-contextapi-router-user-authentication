import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const PostLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default PostLayout;
