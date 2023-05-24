
import { emptyMeme } from "orsys-tjs-meme";

import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

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

export const saveCurrent=createAsyncThunk('current/save',async(meme)=>{
    const pr=await fetch(`http://localhost:5679/memes${undefined !== meme.id ? '/' +meme.id: ''}`,{
        method:undefined!==meme.id?'put':'post',
        headers:{
            "Content-Type":"Application/json"
        },
        body: JSON.stringify(meme)
    })
    return await pr.json();
})

export const {changeMeme,clearMeme} = current.actions

export default current.reducer