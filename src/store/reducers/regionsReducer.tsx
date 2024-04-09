import { createSlice } from "@reduxjs/toolkit";

const name = "regionsReducer";

const initialState = {
  // Replicates response received from data store. Index will replicate id.
  regions: ["Eastern", "Central", "Mountain", "Pacific"],
};

const slice = createSlice({
  name,
  initialState,
  reducers: {},
});

export default slice.reducer;
