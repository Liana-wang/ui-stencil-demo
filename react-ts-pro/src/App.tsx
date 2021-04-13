import React from 'react'
import './App.css'
import Example from './pages/Example'
import ReactHookPage from './pages/ReactHookPage'

function App(): React.ReactElement {
  return (
    <div className='App'>
      <ReactHookPage />
      <Example />
    </div>
  )
}

export default App