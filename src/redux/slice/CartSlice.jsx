
import {createSlice} from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add:(state , actions)=>{state.push(actions.payload)},
        remove:(state , actions)=>{return state.filter((item) => item.id !== actions.payload)},
        reset:(state) => {return []}

    }
})

export const {add , remove , reset} = CartSlice.actions;
export default CartSlice.reducer; 