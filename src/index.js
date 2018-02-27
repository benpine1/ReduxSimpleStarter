import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/searchBar'

const API_KEY = 'AIzaSyDkAGsMhV5vV9B1I25iK2UohacL8VMwOEE';

//create component
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}
//append component to dom

ReactDOM.render(<App />, document.querySelector('.container'));