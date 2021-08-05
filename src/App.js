import React from 'react';
import './App.css';
import { Stack} from '@fluentui/react';
import Employecrud from './Employecrud';
import Header from './Header';
import Addemployee from './Addemployee';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Updateemp from './Updateemp';
function App() {
 

  return (
    <div className="App">
        <Stack vertical >
          <Router>
            <Header />
            <Switch>
              <Route path="/update/:id">
                <Updateemp />
              </Route>
              <Route path="/add">
                <Addemployee />
              </Route>
              <Route path="/">
                <Employecrud />
              </Route>
            </Switch>
          </Router>
        </Stack>
    </div>
  );
}

export default App;
