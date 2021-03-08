import './header.css'

const Header = ({ playerName, score = 0 }) => (
  <header className='header'>
    <span>{`${playerName}'s game`}</span>
    <span>Score: {score}</span>
  </header>
)

export default Header
