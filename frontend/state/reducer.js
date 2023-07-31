// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { INPUT_CHANGE, RESET_FORM, MOVE_CLOCKWISE,MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER} from './action-types'
const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type){
    case MOVE_CLOCKWISE:
      return state = action.payload;
    case MOVE_COUNTERCLOCKWISE:
      return state = action.payload;
    default:
      return state
  }
  
}

const initialQuizState = {
  quiz_id: 2,
  question: 'What is a closure?',
  answers: [
    { answer_id: 0, text: 'A function plus its bindings', correct: true },
    { answer_id: 1, text: 'Clearly some kind of elephant', correct: false },
  ],
}
function quiz(state = initialQuizState, action) {
  switch(action.type){
    case SET_QUIZ_INTO_STATE:
      return state = action.payload
    default:
      return state
  }
  
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
    case SET_SELECTED_ANSWER:
      return state = action.payload
    default:
      return state
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch (action.type){
    case INPUT_CHANGE:
      return {
        ...state,
        [action.payload.id]: action.payload.value
      }
    case RESET_FORM:
      return state = initialFormState
    default:
      return state
  }
 
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
