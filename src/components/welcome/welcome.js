import Button from '@material-ui/core/Button'

const Welcome = ({ setStart }) => (
  <div className='hero'>
    <h2> Welcome to a cool trivia game</h2>
    <Button
      variant='contained'
      color='secondary'
      onClick={() => setStart(true)}
    >
      Start Quiz
    </Button>
  </div>
)

export default Welcome
