
import { emptyMeme } from "orsys-tjs-meme";

import { createSlice } from '@reduxjs/toolkit'

const initialState=emptyMeme;

const current = createSlice({
  name: 'current',
  initialState,
  reducers: {
    changeMeme:(state,action)=>{
        Object.assign(state,action.payload);
    },
    clearMeme:(state,meme)=>{
        Object.assign(state,emptyMeme);
    }
  }
});

export const {changeMeme,clearMeme} = current.actions

export default current.reducer