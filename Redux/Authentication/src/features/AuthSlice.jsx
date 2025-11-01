import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({

    name: "auth",
    initialState : {
        user: JSON.parse(localStorage.getItem("users")) || null,
    },
    reducers: {
        addUser: (state,action) => {
            state.user = action.payload;

        },
        removeUser: (state) => {        
            localStorage.removeItem("users");
             state.user = null;

        }

    }
});
export const {addUser, removeUser} = AuthSlice.actions
export default AuthSlice.reducer