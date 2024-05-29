import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {reducer as testsReducer} from './tests/tests.slice'

const reducers = combineReducers({tests: testsReducer})

export const store = configureStore({
    reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>