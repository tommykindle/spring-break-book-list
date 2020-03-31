import React, { useContext } from 'react';
import BookDetails from "./BookDetails";
import { BookContext } from "../contexts/BookContext";

const BookList = () => {

    const { books } = useContext(BookContext)
    console.log("books", books)
    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map(book => {
                    return (<BookDetails book={book} key={book.id} />)
                })}
            </ul>
        </div>
    ) : (
            <div className="empty">There are no books in your list</div>
        )
}

export default BookList;