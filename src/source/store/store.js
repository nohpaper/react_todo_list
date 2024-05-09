import { configureStore, createSlice } from '@reduxjs/toolkit';

const selectedColor = createSlice({
  name: "color",
  initialState: { value : "yellow" },
  reducers: {
    updateColor(state, action){
      state.value = action.payload;
    }
  },
});


export const { updateColor } = selectedColor.actions;

export default configureStore({
  reducer: {
    color: selectedColor.reducer,
  },
});

