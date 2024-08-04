import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: null,
  userName: '',
  email: '',
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      const { userId, userName, email } = action.payload;
      state.userId = userId;
      state.userName = userName;
      state.email = email; 
      state.isAuthenticated = true;
    },
    logout(state) {
      return initialState;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;


