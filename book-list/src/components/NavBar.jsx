import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
    const { books } = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>Book List</h1>
            <p>Curretly there are {books.length} in your book list</p>
        </div>
    )
}
export default Navbar;