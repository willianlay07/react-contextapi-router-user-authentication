import { useParams } from "react-router-dom";
import { useEffect } from "react";

import Loading from "../components/Loading";
import Error from "../components/Error";
import { usePost } from "../contexts/PostProvider";

const IndividualPost = () => {
  const { id } = useParams();

  const { title, body, fetchEachPost, isLoading, isError } = usePost();

  useEffect(() => {
    fetchEachPost(id);
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1>Post: {id}</h1>
          <h3>Title: {title}</h3>
          <p>Body: {body}</p>
        </>
      )}

      {isError && <Error message={isError} />}
    </div>
  );
};

export default IndividualPost;
