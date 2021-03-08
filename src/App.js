import { useEffect, useState } from 'react'

import Loader from './components/loader/loader'
import Main from './components/main/main'

import './App.css'

function App() {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false)
    }, 500)
    return () => clearTimeout(timer)
  })

  return (
    <div className='App'>
      {loader && <Loader />}
      <Main />
    </div>
  )
}

export default App
