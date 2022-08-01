import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import jokesSlice from './jokesSlice'

export const store =  configureStore({
  reducer: jokesSlice
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>