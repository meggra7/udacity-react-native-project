import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

export const store = configureStore({
  reducer,
});

// Per documenation https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
