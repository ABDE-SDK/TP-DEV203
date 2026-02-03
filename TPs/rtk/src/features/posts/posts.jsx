import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    posts: [],
    error: '',
}

const fetchPosts = createAsyncThunk(
    "Posts/fetchPosts",
    () => {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.data)
    }
)

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload)
        },
        setPost: (state, action) => {
            state.posts = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state)=>{
                state.loading = true
            })
            .addCase(fetchPosts.fulfilled, (state, action)=>{
                state.loading = false;
                state.posts = action.payload;
                state.error = '';
            })
            .addCase(fetchPosts.rejected, (state, action)=>{
                state.loading = false;
                state.posts = [];
                state.error = action.error.message;
            });
    }

});
export const {addPost, setPost} = postSlice.actions;
export default postSlice.reducer;
export {fetchPosts};