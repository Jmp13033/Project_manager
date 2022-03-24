import { Route, Switch , Link } from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';
import Show from './views/Show';

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path="/">
      <Main/>
    </Route>
    <Route exact path= "/product/create">
      <Create/>
    </Route>
    <Route exact path = "/product/:_id/update">
      <Update/>
    </Route>
    <Route exact path = "/product/:_id">
      <Show/>
    </Route>
    </Switch>
  
    </div>
  );
}

export default App;
