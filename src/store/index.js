import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./itemSlice";

const todoStore=configureStore({
      reducer:{
            items:itemsSlice.reducer,
      }
})

export default todoStore;