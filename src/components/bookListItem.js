import React from 'react';

const BookListItem = ({book, onBookSelected}) => {
    return (
        <li
            onClick={() => onBookSelected(book)}
            className="list-group-item">
            {book.title}
        </li>
    )
};

export default BookListItem;