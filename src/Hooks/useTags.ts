import { useState } from "react";

const useTags = () => {
  const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = (newTag: string) => {
    if (newTag && !tags.includes(newTag) && newTag.length < 5) {
      setTags([...tags, newTag]);
    }
  };
  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };
  return { tags, handleAddTag, handleRemoveTag };
};

export default useTags;
