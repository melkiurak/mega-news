import { useEffect, useState } from "react";
import type { Post } from "../types";
import { dataPosts } from "../server/getData";

export const usePost = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      const resultPost = await dataPosts();
      setPosts(resultPost);
    };
    fetchPost();
  }, []);
  return { posts };
};
