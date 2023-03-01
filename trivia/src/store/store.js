import { createSlice, configureStore } from "@reduxjs/toolkit";

const userslice = createSlice({
  name: "user",
  initialState: { username: "sujit", historyList: [], maxScore: 0 ,difficultylevel:"",subject:""},
  reducers: {
    setscore: (state, action) => {
      state.maxScore = action.payload;
    },
    addhistory: (state, action) => {
      state.historyList = [...state.historyList, action.payload];
    },
    signin: (state, action) => {
      state.username = action.payload;
    },
    signout: (state) => {
      state.username = "";
      state.historyList = [];
      state.maxScore = 0;
      state.difficultylevel = "";
      state.subject = "";
    },
    setdifficulty: (state, action) => {
      state.difficultylevel = action.payload
    },
    setsubject: (state, action) => {
      state.subject = action.payload
    }
  },
});

export const useraction = userslice.actions;

const store = configureStore({
  reducer: { user: userslice.reducer },
});

export default store;
