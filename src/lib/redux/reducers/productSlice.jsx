

import { createSlice } from "@reduxjs/toolkit"


const productSlice = createSlice({
    name : 'products',
    initialState: {
        productsList: [],
        updateProduct: {},
        detailProduct: {},
    },
    reducers: {
        setProductsList: (state, action) => {
            state.productsList = action.payload;
        },

        setUpdateProduct: (state, action) => {
            state.updateProduct = action.payload;
        },

        setDetailProduct: (state, action) => {
            state.detailProduct = action.payload;
        }
    }
});

export const{
    setProductsList,
    setUpdateProduct,
    setDetailProduct,
} = productSlice.actions;

export default productSlice.reducer;