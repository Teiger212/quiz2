import React, { useState } from 'react'
import Header from '../header/header'
import Questions from '../questions/questions'

const Game = ({ playerName }) => {
  const [score, setScore] = useState(0)

  return (
    <React.Fragment>
      <Header score={score} playerName={playerName} />
      <Questions setScore={setScore} playerName={playerName} score={score} />
    </React.Fragment>
  )
}

export default Game
