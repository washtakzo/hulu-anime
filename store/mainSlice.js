import { createSlice } from "@reduxjs/toolkit";
import getAnimeQuery from "../requests";

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    categorie: getAnimeQuery.getSeasonAnime,
  },
  reducers: {
    getTrending: (state) => {
      state.categorie = getAnimeQuery.getPopularAnime;
    },
    getSeason: (state, action) => {
      state.categorie = getAnimeQuery.getSeasonAnime(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { trending, season } = mainSlice.actions;

export default mainSlice.reducer;
