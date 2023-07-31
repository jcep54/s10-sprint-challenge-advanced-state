import React from 'react'
import { quizzes } from '../../backend/helpers'
import { connect } from 'react-redux'
import { fetchQuiz, selectAnswer } from '../state/action-creators'
export function Quiz(props) {
  const { fetchQuiz, quiz, selectAnswer, selectedAnswer} = props
  const answerOne = quiz.answers[0]
  const answerTwo = quiz.answers[1]
  console.log(selectedAnswer)

  return (
    <div id="wrapper">
      {
      quiz ? (
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                {answerOne.text}
                <button onClick={() =>selectAnswer(answerOne.answer_id)}>
                  {selectedAnswer === answerOne.answer_id? 'SELECTED': 'Select'}
                </button>
              </div>

              <div className="answer">
              {answerTwo.text}

                <button onClick={()=>(selectAnswer(answerTwo.answer_id))}>
                {selectedAnswer === answerTwo.answer_id? 'SELECTED': 'Select'}
                </button>
              </div>
            </div>
            <button id="submitAnswerBtn" onClick={fetchQuiz}>Submit answer</button>

          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
const mapStateToProps = state =>{
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer
  }
}

export default connect(mapStateToProps, {fetchQuiz, selectAnswer})(Quiz)
