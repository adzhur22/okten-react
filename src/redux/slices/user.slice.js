import {createSlice} from "@reduxjs/toolkit";

const initialState={
    users:[],
    currentUser:null,
    loading:false,
    error:null
};

const userSlice =  createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        getAll:(state, action)=>{
            state.users = action.payload;
        },
        currentUser:(state, action)=>{
            state.currentUser = action.payload
        },
        deleteUser:(state, action)=>{
           const find = state.users.findIndex(value => value.id === action.payload)
            console.log(find)
            state.users.splice(find,1)
        }

    }
})

const {reducer:userReducer, actions:{getAll, currentUser, deleteUser}} = userSlice;

const userActions = {
  getAll,
  currentUser,
  deleteUser
};

export {userReducer, userActions};