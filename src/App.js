import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import SearchPage from './pages/search/search.component';
import './assets/css/styles.css';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      user: null
    }
  }

  componentDidMount(){

  }

  componentDidUpdate(){

  }

  componentWillUnmount(){

  }

  render(){
    return(
      <div className="app">
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <SearchPage></SearchPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;
