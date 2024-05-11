import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    currentUser: any | null;
    error: string | null;
    loading: boolean;
    url : string
}

const initialState: UserState = {
    currentUser: null,
    error: null,
    loading: false,
    url : ""
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action: PayloadAction<any>) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
        
       
        logoutStart: (state) => {
            state.loading = true;
        },
        logoutSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        },
        logoutFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
        setUrl : (state,action:PayloadAction<string>) =>{
            state.url = action.payload;

        }
    }
});

export const {
    signInStart, signInSuccess, signInFailure,
   
    logoutStart, logoutSuccess, logoutFailure,
    setUrl
} = userSlice.actions;

export default userSlice.reducer;
