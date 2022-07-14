// Using Redux Thunk instead of custom reducers
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const newUser = createAsyncThunk('/register', async user => {
  const res = await axios.post(
    'https://expressmysqlapitemplate.herokuapp.com/api/auth/register',
    user,
  );
  console.log(res.data);
  return res.data;
});

export const registerSlice = createSlice({
  name: 'newUser',
  initialState: {
    isPending: false,
    error: true,
    userDetails: null,
  },
  extraReducers: {
    [newUser.pending]: state => {
      state.isPending = true;
      state.error = false;
    },
    [newUser.fulfilled]: (state, action) => {
      state.isPending = false;
      state.newUser = action.payload;
    },
    [newUser.rejected]: state => {
      state.isPending = false;
      state.error = true;
    },
  },
});

export default registerSlice.reducer;
