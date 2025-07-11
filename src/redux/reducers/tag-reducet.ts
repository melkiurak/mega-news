import { createAsyncThunk } from "@reduxjs/toolkit";
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
