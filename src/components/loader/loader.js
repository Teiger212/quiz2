import './loader.css'
import CircularProgress from '@material-ui/core/CircularProgress'

const Loader = () => (
  <div className='loader'>
    <CircularProgress size={100} color={'secondary'} />
  </div>
)

export default Loader
