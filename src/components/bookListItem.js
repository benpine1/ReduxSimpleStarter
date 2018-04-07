import React from 'react';

const BookListItem = ({book}) => {
    return (
        <li key={book.title} className="list-group-item">
            {book.title}
        </li>
    )
};

export default BookListItem;