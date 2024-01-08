import { createSlice } from "@reduxjs/toolkit";
import { promiseData } from "../thunks/dataUrl";
import shortid from "shortid";

const photosSlice = createSlice({
    name: 'phtos',
    initialState: {
        photos: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [promiseData.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [promiseData.fulfilled]: (state, action) => {
            state.isLoading = false;
            action.payload.forEach(item => state.photos.push({ id: shortid.generate(), url: item}));
        },
        [promiseData.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        }
    },
    reducers: {
        deletedPhoto(state, action) {
            state.photos = state.photos.filter(item => item.id !== action.payload);
        }
    },
});

export const { deletedPhoto } = photosSlice.actions;
export default photosSlice.reducer;