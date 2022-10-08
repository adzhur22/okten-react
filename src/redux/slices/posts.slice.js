import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../../services";


const initialState = {
    posts:[],
    post:null,
    loading:false,
    errors:null
} ;


const getAllPosts = createAsyncThunk(
    'postsSlice/getAllPosts',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await postService.getAll();
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }

    }
);

const postsSlice = createSlice({
    name:'postsSlice',
    initialState,
     extraReducers:builder =>
         builder
             .addCase(getAllPosts.fulfilled,(state, action) => {
                 state.posts = action.payload;
                 state.loading = false;
             })
             .addCase(getAllPosts.pending,(state, action) => {
                 state.loading = true;
             })
             .addCase(getAllPosts.rejected,(state, action) => {
                 state.errors = action.payload;
             }),
    reducers:{
        currentPost:(state, action)=>{
            state.post = action.payload;
        },
        deletePost:(state, action)=>{
            const index = state.posts.findIndex(value => value.id === action.payload);
            state.posts.splice(index,1);
        }
    }
});

const{reducer:postsReducer, actions:{currentPost, deletePost}} = postsSlice;

const postsActions = {
    getAllPosts,
    currentPost,
    deletePost
};

export {postsActions, postsReducer}