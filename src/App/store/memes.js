import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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
  },
  extraReducers:(builder)=>{
    builder.addCase('current/save',(state, action)=>{
      const pos = state.memes.findIndex(meme => meme.id === action.payload.id)
      if(pos>=0){
        state.memes[pos] = action.payload;
      }else{
        state.memes.push(action.payload);
      }
    })

    builder.addCase(fetchAllListesValues.fulfilled,(state,action)=>{
      
            console.log(state,action);   
            state.images.push(...action.payload.images);
            state.memes.push(...action.payload.memes);
 
    })
    builder.addDefaultCase((state,action)=>{ console.log(state,action) })
  }
});


export const fetchAllListesValues = createAsyncThunk('listes/fetchAll',async()=>{
    const prImg=fetch('http://localhost:5679/images');
    const prMemes=fetch('http://localhost:5679/memes');

    const prs=await Promise.all([prImg,prMemes]);
    const imgs=await prs[0].json();
    const memes=await prs[1].json();
    return{images:imgs,memes:memes};
})


export const {addImage,addImages} = memes.actions

export default memes.reducer