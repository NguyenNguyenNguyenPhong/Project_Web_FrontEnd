import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: '',
  reducers: {
    setToken: (state) => state, 
  },
});

export const {setToken} = authSlice.actions;
export default authSlice.reducer;