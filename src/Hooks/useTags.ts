import { useState } from "react";

const useTags = (maxtTags = 5) => {
  const [tags, setTags] = useState<string[]>([]);
  const handleAddTag = (newTag: string) => {
    if (newTag && !tags.includes(newTag) && tags.length < maxtTags) {
      setTags([...tags, newTag]);
    }
  };
  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };
  return { tags, handleAddTag, handleRemoveTag };
};

export default useTags;
