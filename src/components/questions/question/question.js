import './question.css'

const Question = ({ question, handleAnswer }) => {
  const { id, answers, text } = question

  return (
    <div className='question-container' key={id}>
      <span className='question'>{text}</span>
      {answers.map((answer) => {
        const { text, id, isCorrect } = answer
        return (
          <div
            onClick={() => handleAnswer(isCorrect)}
            className={'answer'}
            key={id}
          >
            {text}
          </div>
        )
      })}
    </div>
  )
}

export default Question
