import { createSlice } from "@reduxjs/toolkit";

//to track authentication (done by store), whether user is authenticated or not

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;

        } 
    }
})

export const{} = authSlice.actions;

export default authSlice.reducer;