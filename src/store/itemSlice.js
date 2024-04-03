import { createSlice } from "@reduxjs/toolkit";

const itemsSlice=createSlice({
      name:"items",
      initialState:[],
      reducers:{
            //to add item to store
            addtodo:(state,action)=>{
                  state.push(action.payload);
            },
            //to remove item from store
            removetodo:(state,action)=>{
                  return state.filter(item=>item.name!=action.payload[0].name);
            },
      }
})

export const itemsActions=itemsSlice.actions;

export default itemsSlice;