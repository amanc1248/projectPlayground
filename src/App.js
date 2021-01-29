import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Problem1 from "./Problem1/Problem1";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Problem1></Problem1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
