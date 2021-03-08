import './header.css'

const Header = ({ questionNumber = 1, score = 0 }) => (
  <header className='header'>
    <span>Question number {questionNumber}</span>
    <span>Score: {score}</span>
  </header>
)

export default Header
