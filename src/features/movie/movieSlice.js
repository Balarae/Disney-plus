import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name:'movie',
    initialState,
    reducers: {
        setMovies: (state=initialState, action)=>{
            state.movies = action.payload;
        }
    }

})

// Action
export const {setMovies} = movieSlice.actions;

// specific components of the reducer
export const selectMovies = (state) => state.movie.movies;

// reducer
export default movieSlice.reducer