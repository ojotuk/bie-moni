import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Landing from "./component/Landing";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Landing}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
