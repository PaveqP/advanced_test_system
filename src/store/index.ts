import { combineReducers, createStore } from "redux";
import { testReducer } from "./testReducer";

const rootReducer = combineReducers({
    test: testReducer
})

export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof rootReducer>;