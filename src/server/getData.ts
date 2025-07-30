import Parse from "../lib/parseClient";

export const dataTags = async () => {
  try {
    const tagsObject = Parse.Object.extend("Tags");
    const query = new Parse.Query(tagsObject);
    const result = await query.find();
    return result.map((tag) => ({
      name: tag.get("name"),
      image: tag.get("Image") || null,
    }));
  } catch (error) {
    console.error("Error receiving dataTags", error);
    throw error;
  }
};

export const dataPosts = async () => {
  try {
    const postsObject = Parse.Object.extend("Posts");
    const query = new Parse.Query(postsObject);
    query.include("user");
    const result = await query.find();

    return result.map((post) => {
      const user = post.get("user");
      const imagePost = post.get("imagePost");
      return {
        title: post.get("title"),
        imagePost: imagePost ? imagePost.url() : "",
        explanation: post.get("explanation"),
        tags: post.get("tags"),
        user: user,
        date: post.get("date"),
        favoriteCount: post.get("favoriteCount"),
        objectId: post.id ?? "underfine",
      };
    });
  } catch (error) {
    console.error("Error receiving dataPosts", error);
    throw error;
  }
};
