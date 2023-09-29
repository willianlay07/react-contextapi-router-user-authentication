import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import PostLayout from "./components/PostLayout";
import Post from "./pages/Post";
import IndividualPost from "./pages/IndividualPost";
import { PostProvider } from "./contexts/PostProvider";
import AuthLayout from "./components/AuthLayout";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { AuthProvider } from "./contexts/AuthProvider";

const App = () => {
  return (
    <>
      <AuthProvider>
        <PostProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="post" element={<PostLayout />}>
                <Route index element={<Post />} />
                <Route path=":id" element={<IndividualPost />} />
              </Route>

              <Route path="auth" element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route path="login" element={<Login />} />
                <Route path="profile" element={<Profile />} />
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </PostProvider>
      </AuthProvider>
    </>
  );
};

export default App;
