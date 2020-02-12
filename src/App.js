import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import HomePage from './components/pages/HomePage'

class BooksApp extends React.Component {
  

  render() {
    return (
      <div className="app">
      {/* <SearchPage /> */}
      <HomePage />
          
      </div>
    )
  }
}

export default BooksApp
