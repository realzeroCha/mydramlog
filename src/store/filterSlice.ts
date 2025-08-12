import { WhiskyFilter } from "@/types/WhiskyType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  value: WhiskyFilter | null;
}

const initialState: FilterState = {
  value: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<WhiskyFilter | null>) => {
      state.value = action.payload;
    },
    clearFilter: (state) => {
      state.value = null;
    },
  },
});

export const { setFilter, clearFilter } = filterSlice.actions;
export default filterSlice.reducer;
