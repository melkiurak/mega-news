/*import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Post } from "../../types";
import { dataPosts } from "../../server/getData";

export const fetchPost = createAsyncThunk<Post[]>(
  "posts/fetchPost",
  async () => {
    return await dataPosts();
  }
);
interface PostsState {
  post: Post[];
  loading: boolean;
  error: string | null;
}
const initialState: PostsState = {
  post: [],
  loading: false,
  error: null,
};
export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
  },
});
*/
