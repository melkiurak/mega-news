import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Tags } from "../../types";
import { dataTags } from "../../server/getData";

export const fetchTags = createAsyncThunk<Tags[]>(
  "tags/fetchTags",
  async () => {
    return await dataTags();
  }
);
interface TagsState {
  tags: Tags[];
  loading: boolean;
  error: string | null;
}
const initialState: TagsState = {
  tags: [],
  loading: false,
  error: null,
};

export const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTags.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
  },
});
