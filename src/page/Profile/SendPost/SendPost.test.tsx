import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { SendPost } from "@page/Profile/SendPost/SendPost";
import { Provider } from "react-redux";
import { store } from "@src/redux/store.ts";

test("Check create posts", () => {
  render(
    <Provider store={store}>
      <SendPost />
    </Provider>
);
  const buttonCreatePost = screen.getByRole('button', {name: /public/i});
  fireEvent.click(buttonCreatePost);
  expect(buttonCreatePost).toBeDefined();
});
