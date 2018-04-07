import React, { Component } from 'react';
import BookListItem from '../components/bookListItem';
import { connect } from 'react-redux';

class BookList extends Component{
    

    renderList(){
        return this.props.books.map((book) => {
            return (
                <BookListItem book={book} />
            );
        });
    }

    render(){
        return (
            <ul className="list-group col-sm-4">
                {
                    this.renderList()
                }
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        books: state.books
    };
};

export default connect(mapStateToProps)(BookList);