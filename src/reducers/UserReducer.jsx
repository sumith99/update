import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const ApiData = createAsyncThunk(
  'hi',
  async () => {
    const Data = await fetch("https://www.anapioficeandfire.com/api/houses");
    const result = await Data.json();
    console.log("00", result);
    return result;
  }
)
const UserReducer = createSlice({
  name: 'users',
  initialState: { entities: [], loading: 'idle' },
  reducers: {
   
  },

  extraReducers: (builder) => {
    builder.addCase(ApiData.fulfilled, (state, action) => {
      console.log("mmmmmm", state);
      state.entities.push(action.payload);
    });
  },
});
export const { UpadateName, UpadateId } = UserReducer.actions;
export default UserReducer.reducer;