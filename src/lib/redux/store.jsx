import { configureStore } from "@reduxjs/toolkit";
import userSlice, { setCurrentUser } from "./reducers/userSlice";
import productSlice from "./reducers/productSlice";
import categorySlice from "./reducers/categorySlice";
import cartSlice from "./reducers/cartSlice";


const store = configureStore({
  reducer: {
    users: userSlice,
    products: productSlice,
    categories: categorySlice,
    carts: cartSlice,
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
