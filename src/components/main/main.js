import { useState } from 'react'

import Game from '../game/game'
import Welcome from '../welcome/welcome'

import './main.css'

const Main = () => {
  const [start, setStart] = useState(false)
  const [playerName, setPlayerName] = useState('')

  const handleStart = (name) => {
    setPlayerName(name)
    setStart(true)
  }

  return (
    <div>
      {start ? (
        <Game playerName={playerName} />
      ) : (
        <Welcome handleStart={handleStart} />
      )}
    </div>
  )
}

export default Main
