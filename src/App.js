import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter className="App">
      <Header/>

      <div className='web-contents'>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/Register" component={Register}/>
          <Route exact path="/LandingPage" component={LandingPage}/>
        </Switch>
      </div>
      
      <hr/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
