import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
// must provide path reference for self created imported file references,but not for library references, eg: react
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDNAn7u3l9siRez-xLmympqOM4dqbkZ4lA';
//Create a new component that will create some html.
// const declares a variable with a final value--constant
// <-- JSX...looks like html, but isn't. JSX cannot be interpreted by the browser; webpack and babble take care of this.
// () =>   ...is the same in es6 as...function ()
Class App extends Component {
  constructor(props) {
    super(props);

    this.state = {videos: [] };
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });  // this.setState({ videos: videos})
    });
  }
    render() {
    return (
       <div>
        <SearchBar/>
        <VideoList videos={this.state.videos}/>  // passing prop videos to VideoList
      </div>
    );
  }
}

//Take this component's generated html and place it in the DOM (on the page)
ReactDOM.render(<App/>, document.querySelector('.container'));
