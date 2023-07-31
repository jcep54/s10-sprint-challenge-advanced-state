// ❗ You don't need to add extra action creators to achieve MVP
import * as actionTypes from './action-types'
import axios from 'axios';
const { INPUT_CHANGE, RESET_FORM, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_INFO_MESSAGE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER } = actionTypes;
export function moveClockwise(ind) {
  return{type:MOVE_CLOCKWISE, payload: ind}
 }

export function moveCounterClockwise(ind) { 

  return{type:MOVE_COUNTERCLOCKWISE, payload: ind}
}

export function selectAnswer(id) { 
  console.log(id)
  return{type:SET_SELECTED_ANSWER, payload:id}
}

export function setMessage() {
  return{type: SET_INFO_MESSAGE}
 }

export function setQuiz(quiz) {
  
  return{type: SET_QUIZ_INTO_STATE, payload: quiz}
 }

export function inputChange(value, id) {
  
  return {type: INPUT_CHANGE, payload: {value,id}}
 }

export function resetForm() { 
  return{type: RESET_FORM}
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    
    axios.get('http://localhost:9000/api/quiz/next')
    .then(res => {
      // console.log(res.data)
      dispatch(setQuiz(res.data))
    })
    .catch(err =>{
      console.log(err)
    })
    .finally()
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
