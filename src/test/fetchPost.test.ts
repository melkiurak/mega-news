import { usePost } from "@hooks/usePost";
import { expect, test } from "vitest";

const { posts } = usePost();
const myTest = test.extend({
  posts: async ({ task }, use) => {
    await use(posts);
  },
});
