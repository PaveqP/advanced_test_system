const SET_DATA = "SET_DATA"
const SET_QUESTION = "SET_QUESTION"
const SET_CURRENT_ANSWER = "SET_CURRENT_ANSWER"
const SET_TOTAL_POINTS = "SET_TOTAL_POINTS"
const SET_DEFAULT = "SET_DEFAULT"

interface ITestState {
    testData: {
        "deadlineTime": String,
        "questions": [],
    },
    currentQuestion: Number,
    currentAnswer: string[],
    totalPoints: Number,
}
  
type TestAction = {
    type: string; 
    payload?: any; 
};
  
const defaultState: ITestState = {
    testData: {
        "deadlineTime": "20",
        "questions": [],
    },
    currentQuestion: 0,
    currentAnswer: [],
    totalPoints: 0,
};
  
export const testReducer = (state: ITestState = defaultState, action: TestAction): ITestState => {
    switch (action.type) {
        case SET_DATA:
            return{
                ...state,
                testData: action.payload,
            }

        case SET_QUESTION:
            return{
                ...state,
                currentQuestion: action.payload
            }

        case SET_CURRENT_ANSWER:
            return{
                ...state,
                currentAnswer: action.payload
            }

        case SET_TOTAL_POINTS:
            return{
                ...state,
                totalPoints: action.payload
            }

        case SET_DEFAULT:
            return defaultState

        default:
            return state;
    }
};
  
export const SetTest = (data: ITestState)=> ({type: SET_DATA, payload: data})
export const SetCurrentQuestion = (data: Number)=> ({type: SET_QUESTION, payload: data})
export const SetCurrentAnswer = (data: string[])=> ({type: SET_CURRENT_ANSWER, payload: data})
export const SetTotalPoints = (data: number)=> ({type: SET_TOTAL_POINTS, payload: data})
export const SetDefaultState = () => ({type: SET_DEFAULT})