import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Whisky } from "@/types/WhiskyType";

interface FilterState {
  value: Whisky | null;
}

const initialState: FilterState = {
  value: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<Whisky | null>) => {
      state.value = action.payload;
    },
    clearFilter: (state) => {
      state.value = null;
    },
  },
});

export const { setFilter, clearFilter } = filterSlice.actions;
export default filterSlice.reducer;
