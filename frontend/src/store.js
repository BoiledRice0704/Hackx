import { configureStore } from '@reduxjs/toolkit'
import generalSlice from './slices/generalSlice'
import activeUserSlice from "./redux/activeUserSlice";
import chatsSlice from "./redux/chatsSlice";
import profileSlice from "./redux/profileSlice";
import searchSlice from "./redux/searchSlice";
export const store = configureStore({
  reducer: {
    counter: generalSlice,
    activeUser: activeUserSlice,
    profile: profileSlice,
    search: searchSlice,
    chats: chatsSlice,
  },
})