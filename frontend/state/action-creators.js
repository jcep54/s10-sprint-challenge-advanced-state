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
  return{type:SET_SELECTED_ANSWER, payload:id}
}

export function setMessage(message) {
  return{type: SET_INFO_MESSAGE, payload:message}
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
    dispatch(setQuiz(null))
    axios.get('http://localhost:9000/api/quiz/next')
    .then(res => {
      // console.log(res.data)
      dispatch(setQuiz(res.data))
    })
    .catch(err =>{
      console.log(err)
    })
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer(quizId, answerId) {
  return function (dispatch) {
    
    axios.post('http://localhost:9000/api/quiz/answer', {quiz_id:quizId, answer_id: answerId})
    .then(res => {
      dispatch(selectAnswer(null))
      dispatch(setMessage(res.data.message))
    })
    .catch(err =>{
      console.error(err)
    })
    .finally(
      dispatch(fetchQuiz())
    )
    
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz(question, trueAnswer, falseAnswer) {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/new',{question_text:question, true_answer_text:trueAnswer, false_answer_text:falseAnswer})
    .then(res => 
      dispatch(setMessage(`Congrats: "${res.data.question}" is a great question!`)))
    .catch()
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
