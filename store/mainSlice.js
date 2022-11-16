import { createSlice } from "@reduxjs/toolkit";
import getAnimeQuery from "../requests";
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

// Action creators are generated for each case reducer function
export const mainActions = mainSlice.actions;

export default mainSlice.reducer;

//V1 Code :
// export const mainSlice = createSlice({
//   name: "main",
//   initialState: {
//     categorie: getAnimeQuery.getTrendingAnime,
//   },
//   reducers: {
//     getTrending: (state) => {
//       state.categorie = getAnimeQuery.getTrendingAnime;
//     },
//     getPopular: (state) => {
//       state.categorie = getAnimeQuery.getPopularAnime;
//     },
//     getSeason: (state, action) => {
//       state.categorie = () =>
//         getAnimeQuery.getSeasonAnime(action.payload.year, action.payload.size);
//     },
//     getSearch: (state, action) => {
//       state.categorie = () =>
//         getAnimeQuery.getSearchedAnime(
//           action.payload.animeName,
//           action.payload.size
//         );
//     },
//   },
// });
