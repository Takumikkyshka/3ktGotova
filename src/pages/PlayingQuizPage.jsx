import React from 'react'
import { useParams } from 'react-router'
import QuizMultipleAnswer from '../components/QuizMultipleAnswer'
import QuizSingleAnswer from '../components/QuizSignleAnswer'
import QuizDirectAnswer from '../components/QuizDirectAnswer'


export default function PlayingQuizPage() {
    // const params = useParams()
    const {id} = useParams()

    const quizes = JSON.parse(localStorage.getItem('quizes'))

    const [quiz] = quizes.filter(item => item.id == id)

    console.log(quiz)

  return (
    <div className=''>
      <h1 className='text-amber-500 font-bold text-2xl mb-10 text-center'>{quiz.title}</h1>
      {
        quiz.questions.map(question => (
            <div>
                {
                    question.type == 'direct' &&
                    <QuizDirectAnswer correctAnswer={question.correctAnswer} question={question.question}/>
                }
                {
                    question.type == 'single' &&
                    <QuizSingleAnswer correctAnswer={question.correctAnswer} question={question.question} variants={question.options} />
                }
                {
                    question.type == 'multiple' &&
                    <QuizMultipleAnswer correctAnswers={question.correctAnswer} question={question.question} variants={question.options} />
                }
            </div>
        ))
      }
    </div>
  )
}
