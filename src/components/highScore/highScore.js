import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core'

import './highscore.css'

const HighScore = () => {
  const entries = Object.entries(localStorage)
  const rows = entries.sort((a, b) => b[1] - a[1])

  return (
    <div className='leadboard'>
      <h1>Leadboard</h1>

      <TableContainer component={Paper}>
        <Table className={'table'} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Player</TableCell>
              <TableCell align='right'>Highest Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((entry) => (
              <TableRow key={entry[0]}>
                <TableCell component='th' scope='row'>
                  {entry[0]}
                </TableCell>
                <TableCell align='right'>{entry[1]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default HighScore
