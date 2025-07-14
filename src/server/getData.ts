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
