import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  jokeService,
  findJoke,
  getJokeCategories,
  RANDOM_TYPE
} from './../HttpService'
import { jokeState } from './../ts/interfaces'

export const initialState = {
  joke: {},
  categories: [],
  isLoading: false,
  error: '',
} as jokeState

export const jokesSlice = createSlice({
  name: 'joke',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = ''
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJoke.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchJoke.fulfilled, (state, { payload }) => {
      console.log('payload', payload);
      
      state.joke = payload
      state.isLoading = false
    })
    builder.addCase(fetchJoke.rejected, (state, { error }) => {
      state.isLoading = false
      state.error = error.message
    })
    builder.addCase(fetchFindJoke.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchFindJoke.fulfilled, (state, { payload }) => {
      state.joke = payload.result[0]
      state.isLoading = false
    })
    builder.addCase(fetchFindJoke.rejected, (state, { error }) => {
      state.isLoading = false
      state.error = error.message
    })
    builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
      state.categories = payload
      state.isLoading = false
    })
    builder.addCase(fetchCategories.rejected, (state, { error }) => {
      state.isLoading = false
      state.error = error.message
    })
    builder.addCase(fetchByCategory.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchByCategory.fulfilled, (state, { payload }) => {
      console.log('payload', payload);
      
      state.joke = payload
      state.isLoading = false
    })
    builder.addCase(fetchByCategory.rejected, (state, { error }) => {
      state.isLoading = false
      state.error = error.message
    })
  }
})

export const { resetError } = jokesSlice.actions

export const fetchJoke = createAsyncThunk('jokes/fetchJoke', () => {
  return jokeService(RANDOM_TYPE)
})

export const fetchFindJoke = createAsyncThunk('jokes/findJoke', (searchText: string) => {
  console.log('searchText', searchText);
  return findJoke(searchText)
})

export const fetchCategories = createAsyncThunk('jokes/fetchCategories', () => {
  return getJokeCategories()
})

export const fetchByCategory = createAsyncThunk('jokes/fetchByCategory', (category: string) => {
  const finalEndpoint = `random?category=${category}`

  return jokeService(finalEndpoint)
})

export default jokesSlice.reducer