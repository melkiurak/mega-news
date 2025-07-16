import { useEffect, useState } from "react";
import type { Post } from "../types";
import { dataPosts } from "../server/getData";

export const usePost = () => {
  const [post, setPost] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPost = async () => {
      const resultPost = await dataPosts();
      setPost(resultPost);
    };
    fetchPost();
  }, []);
};
