import { createSlice } from "@reduxjs/toolkit";
import getAnimeQuery from "../requests";
import { AnimeSections } from "../utils/classes";

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    categorie: AnimeSections.TRENDING,
    payload: {},
  },
  reducers: {
    getTrending: (state) => {
      state.categorie = AnimeSections.TRENDING;
    },
    getPopular: (state) => {
      state.categorie = AnimeSections.POPULAR;
    },
    getSeason: (state, action) => {
      state.categorie = () => AnimeSections.SEASON;
      state.payload = { ...action.payload };
    },
    getSearch: (state, action) => {
      state.categorie = () => AnimeSections.SEARCH_ANIME;
      state.payload = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const mainActions = mainSlice.actions;

export default mainSlice.reducer;
