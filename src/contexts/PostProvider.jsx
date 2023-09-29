import { createContext, useContext, useState, useEffect } from "react";

const PostContext = createContext();
const BASE_URL = "https://jsonplaceholder.typicode.com/posts/";

function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchAllPosts() {
      setIsLoading(true);
      setIsError("");

      try {
        const res = await fetch(`${BASE_URL}`, {
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await res.json();

        setIsLoading(false);
        setPosts(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setIsLoading(false);
          setIsError(error.message);
        }
      }
    }

    fetchAllPosts();

    return () => {
      controller.abort();
    };
  }, []);

  async function fetchEachPost(id) {
    setIsLoading(true);
    setIsError("");

    try {
      const res = await fetch(`${BASE_URL}${id}`);
      if (!res.ok) throw new Error("Something went wrong!");

      const data = await res.json();

      setIsLoading(false);
      setTitle(data.title);
      setBody(data.body);
    } catch (error) {
      setIsLoading(false);
      setIsError(error.message);
    }
  }

  return (
    <PostContext.Provider
      value={{
        posts,
        isLoading,
        isError,
        title,
        body,
        fetchEachPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

function usePost() {
  const context = useContext(PostContext);

  if (context === undefined)
    throw new Error("PostContext is outside of PostProvider!");

  return context;
}

export { PostProvider, usePost };
