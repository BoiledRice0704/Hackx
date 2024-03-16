import { configureStore } from '@reduxjs/toolkit';
import generalSlice from './slices/generalSlice';
import activeUserSlice from "./redux/activeUserSlice";
import chatsSlice from "./redux/chatsSlice";
import profileSlice from "./redux/profileSlice";
import searchSlice from "./redux/searchSlice";

export const store = configureStore({
  reducer: {
    counter: generalSlice.reducer,
    activeUser: activeUserSlice.reducer,
    profile: profileSlice.reducer,
    search: searchSlice.reducer,
    chats: chatsSlice.reducer,
  },
});
