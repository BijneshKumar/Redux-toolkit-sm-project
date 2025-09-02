import { createSlice } from "@reduxjs/toolkit";


export const cartslice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalPrice:0
    },
    reducers:{
        addToCart:(state,action)=>{
            const newItem = action.payload;
            state.items.push(newItem)
            state.totalPrice += newItem.price
        },

        clearCart:(state)=>{
            state.items= [],
            state.totalPrice= 0
        }
    }
})


export const {addToCart,clearCart} = cartslice.actions

export default cartslice.reducer