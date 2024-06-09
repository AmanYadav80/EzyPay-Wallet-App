import { createSlice, isAction } from "@reduxjs/toolkit";
const userSlice=createSlice({
    name:'user',
    initialState:{
        username:null
    },
    reducers:{
        addUser:(state,action)=>{
            state.username=action.payload;
        },
        getUsername:(state)=>{
            return state.username;
        }
    }
});
export const { addUser,getUsername }=userSlice.actions;
export default userSlice.reducer;