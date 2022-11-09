import { createSlice } from "@reduxjs/toolkit";
import getAnimeQuery from "../requests";

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    categorie: getAnimeQuery.getTrendingAnime,
  },
  reducers: {
    getTrending: (state) => {
      state.categorie = getAnimeQuery.getTrendingAnime;
    },
    getPopular: (state) => {
      state.categorie = getAnimeQuery.getPopularAnime;
    },
    getSeason: (state, action) => {
      state.categorie = () =>
        getAnimeQuery.getSeasonAnime(action.payload.year, action.payload.size);
    },
  },
});

// Action creators are generated for each case reducer function
export const mainActions = mainSlice.actions;

export default mainSlice.reducer;
