import React from 'react'
import AppRouter from './Router/AppRouter'
import Navigation from './Router/Navigation'

const App = () => {
  return (
    <div>
      <h1>React-Routing</h1>
      <Navigation/>
      <AppRouter/>
      
    </div>
  )
}

export default App