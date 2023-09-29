import Loading from "../components/Loading";
import Error from "../components/Error";
import PostList from "../components/PostList";
import { usePost } from "../contexts/PostProvider";

const Post = () => {
  const { posts, isLoading, isError } = usePost();

  return (
    <div>
      <h1>Post</h1>
      {isLoading ? <Loading /> : <PostList posts={posts} />}
      {isError && <Error message={isError} />}
    </div>
  );
};

export default Post;
