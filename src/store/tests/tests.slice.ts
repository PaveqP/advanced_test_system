import { createSlice } from "@reduxjs/toolkit";
import { testStateType } from "./tests.types";

const initialState: testStateType = {
    testData: {
        "deadlineTime": "20",
        "questions": [],
    },
    currentQuestion: 0,
    currentAnswer: [],
    totalPoints: 0,
}

export const testsSlice = createSlice({
    name: 'tests',
    initialState,
    reducers: {
        setData: (state: testStateType, action) => {
            state.testData = action.payload
        },
        setCurrentQuestion: (state: testStateType, action) => {
            state.currentQuestion = action.payload
        },
        setCurrentAnswer: (state: testStateType, action) => {
            state.currentAnswer = action.payload
        },
        setTotalPoints: (state: testStateType, action) => {
            state.totalPoints = action.payload
        },
        setDefaultState: (state: testStateType) => {
            state.testData = initialState.testData
            state.currentQuestion = initialState.currentQuestion
            state.currentAnswer = initialState.currentAnswer
            state.totalPoints = initialState.totalPoints
        }
    }
})

export const {actions, reducer} = testsSlice