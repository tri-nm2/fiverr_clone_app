import "./App.css";
//import PageTemplate from "templates/PageTemplate";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { Suspense } from "react";
import React from "react";

function App() {
  const history = useHistory();

  const Home = React.lazy(() => import("features/main/pages/Home"));

  return (
    <Router history={history}>
      <div className="App">
        <Suspense>
          <Switch>
            <Route path="/" exact component={Home}></Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
