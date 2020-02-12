import React from 'react'
import BookShelf from '../BookShelf'

class HomePage extends React.Component{
    render() {
        return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
            <div className="list-books-content">
              <BookShelf />
              
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )
    }
}

export default HomePage