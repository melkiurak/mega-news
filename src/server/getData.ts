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
    console.error("Ошибка при получении данных", error);
    throw error;
  }
};

export const dataPosts = async () => {
  try {
    const postsObject = Parse.Object.extend("Posts");
    const query = new Parse.Query(postsObject);
    const result = await query.find();
    return result.map((post) => ({
      title: post.get("title"),
      imgPost: post.get("imgPost"),
      explanation: post.get("explanation"),
      user: post.get("User"),
      date: post.get("date"),
      favoriteCount: post.get("favoriteCount"),
    }));
  } catch (error) {
    console.error("Ошибка при получении данных", error);
    throw error;
  }
};
