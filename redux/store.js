import {configureStore} from '@reduxjs/toolkit';
import registerSlice from './registerSlice';
// import userSlice from './userSlice';
// import userSlice from './userSlice';
export default configureStore({
  reducer: {
    // user: userSlice,
    register: registerSlice,
  },
});
