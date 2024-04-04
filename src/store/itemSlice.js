import { createSlice } from "@reduxjs/toolkit";

      const data=JSON.parse(localStorage.getItem('currItems')) || [];
      
const itemsSlice=createSlice({
      name:"items",
      initialState:data,
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