import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({

    name: "auth",
    initialState : {
        user: null,
    },
    reducers: {
        addUser: (state,action) => {
            state.user = action.payload;

        },
        removeUser: (state) => {
            state.user = null;

        }

    }
});
export const {addUser, removeUser} = AuthSlice.actions
export default AuthSlice.reducer