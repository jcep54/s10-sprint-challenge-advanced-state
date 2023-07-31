import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
  const { inputChange, postQuiz, newQuestion, newTrueAnswer, newFalseAnswer} = props;
  const onChange = e => {
    const { value, id } = e.target
    inputChange(value,id)
  }
  const onSubmit = e => {
    e.preventDefault()
    postQuiz(newQuestion,newTrueAnswer,newFalseAnswer)
  }
   const isDisabled = (newFalseAnswer.trim().length>0 && newTrueAnswer.trim().length>0 && newQuestion.trim().length>0)? false:true;

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" value={newQuestion} />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value={newTrueAnswer}/>
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value={newFalseAnswer}/>
      <button id="submitNewQuizBtn" disabled={isDisabled}>Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = state =>{
  return {
    newQuestion: state.form.newQuestion,
    newTrueAnswer: state.form.newTrueAnswer,
    newFalseAnswer: state.form.newFalseAnswer
  }
}

export default connect(mapStateToProps, actionCreators)(Form)
