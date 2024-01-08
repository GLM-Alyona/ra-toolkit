import { createAsyncThunk } from "@reduxjs/toolkit";

const fileToDataUrl = file => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
    
        fileReader.addEventListener('load', evt => {
            resolve(evt.currentTarget.result);
        });
      
        fileReader.addEventListener('error', evt => {
            reject(new Error(evt.currentTarget.error));
        });
      
        fileReader.readAsDataURL(file);
    });
}

export const promiseData = createAsyncThunk('photos', async (files) => {
    const urls = await Promise.all(files.map(o => fileToDataUrl(o)));

    return urls
})