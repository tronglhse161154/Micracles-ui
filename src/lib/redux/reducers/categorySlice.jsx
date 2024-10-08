
import { createSlice } from "@reduxjs/toolkit"


const categorySlice = createSlice({
    name : 'categories',
    initialState: {
        categoriesList: [],
        productsBySubcategory: [],
    },
    reducers: {
        setCategoriesList: (state, action) => {
            state.categoriesList = action.payload;
        },
        setProductsBySubcategory: (state, action) => {
            state.productsBySubcategory = action.payload;
          },

    }
});

export const{
    setCategoriesList, setProductsBySubcategory
} = categorySlice.actions;

export default categorySlice.reducer;