import { createSlice } from '@reduxjs/toolkit'

const initialState = {
url:{},
scrollstate:false,
scrolltop:false,

}

export const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {
 getUrl:(state,action)=>{
    state.url=action.payload;
 },
 getScrollState:(state,action)=>{
state.scrollstate=action.payload;
 },
 getScrollTop:(state,action)=>{
  state.scrolltop=action.payload;
 },
  },
})

export const { getUrl,getScrollState,getScrollTop} = homeSlice.actions

export default homeSlice.reducer