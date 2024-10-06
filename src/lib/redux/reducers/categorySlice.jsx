
import { createSlice } from "@reduxjs/toolkit"


const categorySlice = createSlice({
    name : 'categories',
    initialState: {
        categoriesList: [],
    },
    reducers: {
        setCategoriesList: (state, action) => {
            state.categoriesList = action.payload;
        },

    }
});

export const{
    setCategoriesList,
} = categorySlice.actions;

export default categorySlice.reducer;