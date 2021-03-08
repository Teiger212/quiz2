import { useState } from 'react'
import questionsData from '../../data/questionsData.json'
import Question from './question/question'
import HighScore from '../highScore/highScore'

import './questions.css'

const Questions = ({ setScore, score, playerName }) => {
  const [questionNumber, setQuestionNumber] = useState(0)
  const handleAnswer = (isCorrect) => {
    isCorrect && setScore(score + 10)
    setQuestionNumber(questionNumber + 1)

    if (questionNumber === questionsData.length - 1) {
      const finalScore = isCorrect ? score + 10 : score
      localStorage.setItem(playerName, finalScore)
    }
  }

  const question = questionsData[questionNumber]
    ? questionsData[questionNumber]
    : false

  return question ? (
    <div className='questions'>
      <Question question={question} handleAnswer={handleAnswer} />
    </div>
  ) : (
    <HighScore />
  )
}

export default Questions
