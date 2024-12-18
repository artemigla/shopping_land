import { createSlice } from "@reduxjs/toolkit";

type Theme = {
  isDark: boolean;
};

const initialState: Theme = {
  isDark: false,
};

const chancheTheme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { toggleTheme } = chancheTheme.actions;
export default chancheTheme.reducer;
