import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    currentUser: any | null;
    error: string | null;
    loading: boolean;
}

const initialState: UserState = {
    currentUser: null,
    error: null,
    loading: false
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
        }
    }
});

export const {
    signInStart, signInSuccess, signInFailure,
   
    logoutStart, logoutSuccess, logoutFailure
} = userSlice.actions;

export default userSlice.reducer;
