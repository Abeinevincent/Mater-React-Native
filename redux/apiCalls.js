import axios from 'axios';
import {loginFailure, loginStart, loginSuccess} from './userSlice';

export const loginUser = async (user, dispatch) => {
  dispatch(loginStart);
  try {
    const res = await axios.post(
      'https://expressmysqlapitemplate.herokuapp.com/api/auth/login',
      user,
    );
    dispatch(loginSuccess(res.data));
    console.log(res.data);
  } catch (err) {
    dispatch(loginFailure());
    console.log(err);
  }
};
