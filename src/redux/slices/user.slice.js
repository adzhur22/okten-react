import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../../services";


const initialState={
    users:[],
    currentUser:null,
    loading:false,
    error:null
};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await userService.getAll();
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);

const getUser = createAsyncThunk(
    'userSlice/getUser',
    async ({id},{rejectWithValue})=>{
        try{
            const {data} = await userService.getById(id);
            return data
        }catch (e){
           return rejectWithValue(e.response.data)
        }
    }

)


const userSlice =  createSlice({
    name:'userSlice',
    initialState,
    reducers: {
        currentUser: (state, action) => {
            state.currentUser = action.payload
        },
        deleteUser: (state, action) => {
            const find = state.users.findIndex(value => value.id === action.payload)
            console.log(find)
            state.users.splice(find, 1)
        }
    },


    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled,(state, action)=>{
                state.users = action.payload;
                state.loading = false;
            })
            .addCase(getAll.rejected,(state, action)=>{
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending,(state, action)=>{
                state.loading = true;
            })
            .addCase(getUser.fulfilled,(state, action)=>{
                state.currentUser = action.payload;
            })
})


const {reducer:userReducer, actions:{currentUser, deleteUser}} = userSlice;

const userActions = {
  getAll,
  currentUser,
  deleteUser,
  getUser
};

export {userReducer, userActions};