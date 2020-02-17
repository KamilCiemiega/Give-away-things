import React from 'react';
import Home from './components/Home/Home';
import LogIn from './components/Registration/LogIn';
import Registry from './components/Registration/Registry';
import Logout from './components/Registration/Logout';
import GiveStuff from './components/GiveStuff/GiveStuff';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/logowanie' component={LogIn} />
            <Route path='/rejestracja' component={Registry} />
            <Route path='/wylogowano' component={Logout} />
            <Route path='/oddajrzeczy' component={GiveStuff}/>
          </Switch>
        </>
      </HashRouter>
    </div>
  );
}

export default App;
