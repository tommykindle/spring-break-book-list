import React, { useContext, useState } from 'react';
import { BookContext } from "../contexts/BookContext";
import { bookReducer } from '../reducers/bookReducer';

const BookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");


    const handleSubmit = (e) => {
        console.log("dispatch", dispatch)
        e.preventDefault();
        dispatch({ type: "ADD_BOOK", book: { title, author } });
        setTitle("");
        setAuthor("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="book title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="book author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <input type="submit" value="add a book to your list" />

        </form>
    )
}

export default BookForm;