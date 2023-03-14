import { createSlice, configureStore } from "@reduxjs/toolkit";

const userslice = createSlice({
  name: "user",
  initialState: {maxScore: 0 ,difficultylevel:"",subject:"",currentscore:0},
  reducers: {
    setscore: (state, action) => {
      state.maxScore = action.payload;
    },
    setcurrentscore: (state, action) => {
      state.currentscore = action.payload;
    },
    setdifficulty: (state, action) => {
      state.difficultylevel = action.payload;
    },
    setsubject: (state, action) => {
      state.subject = action.payload;
    }
  },
});

export const useraction = userslice.actions;

const store = configureStore({
  reducer: { user: userslice.reducer },
});

export default store;
