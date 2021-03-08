import { useState } from 'react'

import Game from '../game/game'
import Welcome from '../welcome/welcome'

import './main.css'

const Main = () => {
  const [start, setStart] = useState(false)

  return <div>{start ? <Game /> : <Welcome setStart={setStart} />}</div>
}

export default Main
