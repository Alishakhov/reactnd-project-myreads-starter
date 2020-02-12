import React from 'react'
import Book from './Book'

class BookShelf extends React.Component {
    render() {
        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{}</h2>
                    <div className="bookshelf-books">
                    <Book />
                    <Book />
                    <Book />
                  </div>
                </div>
              </div>
        )
    }
}

export default BookShelf