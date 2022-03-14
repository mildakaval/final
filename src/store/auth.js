import { createSlice } from '@reduxjs/toolkit';
import LocalStorage from '../libs/LocalStorage';

const initialState = LocalStorage.get('auth') ?? {
  loggedIn: false,
  token: null,
  user: null,
  redirectTo: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, { payload }) {
      state.loggedIn = true;
      state.token = payload.token;
      state.user = payload.user;
      state.redirectTo = payload.redirectTo;
      LocalStorage.set('auth', state);
    },
    logout(state) {
      state.loggedIn = false;
      state.token = null;
      state.user = null;
      state.redirectTo = null;
      LocalStorage.clear('auth');
    },
    updateAuthUser(state, { payload }) {
      state.user = payload.user;
      if (payload.token) {
        state.token = payload.token;
      }
      LocalStorage.set('auth', state);
    },
  },
});

export const { login, logout, updateAuthUser } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;