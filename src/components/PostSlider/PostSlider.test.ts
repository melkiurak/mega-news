import { expect, test } from "vitest";

const posts = [];

const postTest = test.extend({
  posts: async ({ task }, use) => {
    posts.push(1, 2, 3);
    await use(posts);
    posts.length = 0;
  },
});
postTest("add post", ({ posts }) => {
  expect(posts.length).toBe(3);
});
