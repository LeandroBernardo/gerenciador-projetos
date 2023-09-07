import React from 'react'
import Header from './components/Header'
import ClienteList from './components/ClienteList'

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <ClienteList />
    </div>
  )
}

export default App
