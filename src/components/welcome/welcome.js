import { Button, TextField } from '@material-ui/core'
import { useState } from 'react'

import './welcome.css'

const Welcome = ({ handleStart }) => {
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [currentName, setCurrentName] = useState('')

  const handleChange = (text) => {
    const {
      target: { value },
    } = text
    setCurrentName(value)
    setButtonDisabled(!value)
  }

  return (
    <div className='hero'>
      <h2> Welcome to a cool trivia game</h2>
      <TextField
        onChange={(text) => handleChange(text)}
        label='Player Name'
        color='secondary'
        variant='outlined'
      />
      <Button
        disabled={buttonDisabled}
        variant='contained'
        color='secondary'
        onClick={() => handleStart(currentName)}
      >
        Start Quiz
      </Button>
    </div>
  )
}

export default Welcome
