import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = 'AIzaSyDkAGsMhV5vV9B1I25iK2UohacL8VMwOEE';

//create component
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
        };

        this.videoSearch('');
    }

    videoSearch(term) {
        YTSearch({
            key: API_KEY,
            term: term
        }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }

}
//append component to dom

ReactDOM.render(
    <App/>, document.querySelector('.container'));