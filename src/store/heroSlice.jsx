import { createSlice } from "@reduxjs/toolkit";

const heroSlice = createSlice({
  name: "hero",
  initialState: {
    currentImage: 0,
    isOpen: false, // Sidebar menu state
  },
  reducers: {
    nextImage: (state, action) => {
      state.currentImage = (state.currentImage + 1) % action.payload;
    },
    prevImage: (state, action) => {
      state.currentImage =
        (state.currentImage - 1 + action.payload) % action.payload;
    },
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { nextImage, prevImage, toggleMenu } = heroSlice.actions;
export default heroSlice.reducer;
