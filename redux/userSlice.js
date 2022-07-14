import {createReducer} from '@reduxjs/toolkit';

const userSlice = createReducer({
  name: 'user',
  initialState: {
    userInfo: null,
    isPending: false,
    error: false,
  },
  reducers: {
    loginStart: state => {
      state.isPending = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isPending = false;
      state.userInfo = action.payload;
    },
    loginFailure: state => {
      state.isPending = false;
      state.error = true;
    },
  },
});
export const {loginFailure, loginStart, loginSuccess} = userSlice.actions;
export default userSlice.reducer;
