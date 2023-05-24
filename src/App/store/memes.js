import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    images:[],
    memes:[],
}

const memes = createSlice({
  name: 'listes',
  initialState,
  reducers: {
    addImage:(state,action)=>{
        state.images.push(action.payload);
    },
    addImages:(state,action)=>{
        state.images.push(...action.payload);
    }
  }
});

export const {addImage,addImages} = memes.actions

export default memes.reducer