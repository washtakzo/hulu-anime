import { createSlice } from "@reduxjs/toolkit";
import { fetchFunctionToUse } from "../utils/helpers";

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    categorie: fetchFunctionToUse.TRENDING,
    payload: undefined,
  },
  reducers: {
    getTrending: (state) => {
      state.categorie = fetchFunctionToUse.TRENDING;
    },
    getPopular: (state) => {
      state.categorie = fetchFunctionToUse.POPULAR;
    },
    getSeason: (state, action) => {
      state.categorie = fetchFunctionToUse.SEASON;
      state.payload = action.payload;
    },
    getSearch: (state, action) => {
      state.categorie = fetchFunctionToUse.SEARCH;
      state.payload = action.payload;
    },
  },
});

export const mainActions = mainSlice.actions;

export default mainSlice.reducer;
