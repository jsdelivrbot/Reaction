import React from 'react';
import ReactDOM from 'react-dom';
// must provide path reference for self created imported file references,but not fo rlibrary references, eg: react
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1n027DPOo_5Ss';

//Create a new component that will create some html.
// const declares a variable with a final value--constant
// <-- JSX...looks like html, but isn't. JSX cannot be interpreted by the browser; webpack and babble take care of this.
// () =>   ...is the same in es6 as...function ()
const App = () => {
  return (
     <div>
      <SearchBar/>
    </div>
  );
}

//Take this component's generated html and place it in the DOM (on the page)
ReactDOM.render(<App/>, document.querySelector('.container'));
