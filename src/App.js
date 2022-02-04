import './App.scss';
import React from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import movieDetail from './components/movieDetails/movieDetail';
import home from './components/home/home';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import PageNotFound from './components/PageNotFound/PageNotFound';
function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">

        <Switch>

        <Route exact path="/" component={home}></Route>
        <Route exact path="/movie/:imdbID" component={movieDetail}></Route>
        <Route component={PageNotFound}></Route>
        </Switch>
        </div> 
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
