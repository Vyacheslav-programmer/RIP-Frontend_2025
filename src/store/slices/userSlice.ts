import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {AsyncThunkConfig} from "modules/types"
import {api} from "modules/api.ts";
import {User, UserLogin, UserRegister, UserUpdateProfile} from "src/api/Api.ts";

const initialState:User & {is_authenticated: boolean} = {
	id: -1,
	username: "",
	is_authenticated: false
}

export const fetchUserInfo = createAsyncThunk<User, void, AsyncThunkConfig>(
    "info",
    async function() {
        const response = await api.users.usersInfoList()
        return response.data
    }
)

export const handleLogin = createAsyncThunk<User, UserLogin, AsyncThunkConfig>(
    "login",
    async function({username, password}:UserLogin) {
        const response = await api.users.usersLoginCreate({
            username,
            password
        })

        return response.data
    }
)

export const handleRegister = createAsyncThunk<User, UserRegister, AsyncThunkConfig>(
    "register",
    async function({username, email, password}:UserRegister) {
        const response = await api.users.usersRegisterCreate({
            username,
            email,
            password
        })

        return response.data
    }
)

export const handleLogout = createAsyncThunk<void, void, AsyncThunkConfig>(
    "logout",
    async function() {
        await api.users.usersLogoutCreate()
    }
)

export const handleUpdateProfile = createAsyncThunk<UserUpdateProfile | null, UserRegister, AsyncThunkConfig>(
    "updateProfile",
    async function(userData:UserRegister, thunkAPI) {
        const state = thunkAPI.getState()
        const {password} = userData
        if (state.user) {
            const response = await api.users.usersUpdateUpdate({
                password
            })

            return response.data
        }

        return null
    }
)

const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
        updateUserInfo: (state, action) => {
            state.is_authenticated = action.payload.is_authenticated
            state.id = action.payload.id
            state.username = action.payload.username
        }
    },
    extraReducers: (builder) => {
        builder.addCase(handleLogin.fulfilled, (state, action: PayloadAction<User>) => {
            state.is_authenticated = true
            state.id = action.payload.id
            state.username = action.payload.username
        });
        builder.addCase(handleRegister.fulfilled, (state, action: PayloadAction<User>) => {
            state.is_authenticated = true
            state.id = action.payload.id
            state.username = action.payload.username
        });
        builder.addCase(handleLogout.fulfilled, (state) => {
            state.is_authenticated = false
            state.id = -1
            state.username = ""
        });
        builder.addCase(fetchUserInfo.fulfilled, (state, action: PayloadAction<User>) => {
            state.is_authenticated = true
            state.id = action.payload.id
            state.username = action.payload.username
        });
    }
})

export const {updateUserInfo} = userSlice.actions

export default userSlice.reducer
