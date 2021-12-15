import './App.css';
import Main from './components/main'
import Info from './components/info'

import {
  BrowserRouter as Router,
  Route, Switch
}
  from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/info/:id'>
            <Info></Info>
          </Route>
          <Route path='/'>
            <Main></Main>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
