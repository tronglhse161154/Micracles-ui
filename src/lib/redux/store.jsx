import { configureStore } from '@reduxjs/toolkit'; 
import usersSlice,{setCurrentUser} from './reducers/userSlice';
import productSlice from './reducers/productSlice';

const store = configureStore({
  reducer: {
    users: usersSlice,
    products: productSlice,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
    }),
});

if (typeof window !== "undefined") {
  const currentUser = sessionStorage.getItem("user");
  if (currentUser) {
    store.dispatch(setCurrentUser(JSON.parse(currentUser)));
  }
}

export default store;