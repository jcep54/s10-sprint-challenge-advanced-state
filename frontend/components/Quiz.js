import React,{ useEffect } from 'react'
import { quizzes } from '../../backend/helpers'
import { connect } from 'react-redux'
import { fetchQuiz, selectAnswer, postAnswer} from '../state/action-creators'
export function Quiz(props) {
  const { fetchQuiz, quiz, selectAnswer, selectedAnswer, postAnswer} = props
  const answerOne = quiz? quiz.answers[0] : null;
  const answerTwo = quiz? quiz.answers[1] : null;
  // useEffect(()=>{
  //   fetchQuiz()
  // },[])
  if(!quiz) 
    fetchQuiz(); 
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
            <button id="submitAnswerBtn" onClick={()=>postAnswer(quiz.quiz_id,selectedAnswer)}>Submit answer</button>

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

export default connect(mapStateToProps, {fetchQuiz, selectAnswer, postAnswer})(Quiz)
