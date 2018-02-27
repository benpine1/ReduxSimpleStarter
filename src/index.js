import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/searchBar'
import VideoList from './components/videoList'

const API_KEY = 'AIzaSyDkAGsMhV5vV9B1I25iK2UohacL8VMwOEE';

//create component
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };

        YTSearch({
            key: API_KEY,
            term: 'yoga'
        }, (videos) => {
            this.setState({videos})
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoList videos={this.state.videos} />
            </div>
        );
    }

}
//append component to dom

ReactDOM.render(
    <App/>, document.querySelector('.container'));