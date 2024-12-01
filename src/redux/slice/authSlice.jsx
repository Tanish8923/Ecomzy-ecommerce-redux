import { createSlice } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';


const initialState = {
    isLoggedIn : false,
}


export const authSlice = createSlice({
    name : "auth" ,
    initialState,
    reducers : {
        logIn : (state , action) => {
            toast.success("Logged in");
            state.isLoggedIn = true ;
            console.log(action.payload);
        },
        signUp : (state , action) => {
            toast.success("Account Created")
            state.isLoggedIn = true ;
            console.log(action.payload);
        },
        logOut : (state) => {
            state.isLoggedIn = false ;
            toast.success("Logged out");
            console.log(state.isLoggedIn);
            
        }
    }
})

export const {logIn , signUp , logOut} = authSlice.actions;
export default authSlice.reducer;