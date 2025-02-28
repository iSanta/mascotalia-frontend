import { FiltersState } from "@/Domain/states/FiltersState";
import { createSlice } from "@reduxjs/toolkit";

const initialState: FiltersState = {
  filters: {},
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (
      state,
      action: {
        payload: { param: string; value: string | { property: string; type: any } };
      }
    ) => {
      const { param, value } = action.payload;

      if (typeof value === "object" && value !== null) {
        const currentFilters = state.filters[param] || [];
        const index = currentFilters.findIndex((f) => f.property === value.property);

        if (index >= 0) {
          currentFilters[index] = value;
        } else {
          currentFilters.push(value);
        }

        state.filters[param] = currentFilters;
      } else {
        state.filters[param] = value;
      }
    },
    resetFilters: (state) => {
      state.filters = {}; // Reseteamos todos los filtros
    },
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
