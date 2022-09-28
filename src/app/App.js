import "./App.css";
import PageTemplate from "templates/PageTemplate";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { Suspense, useEffect } from "react";
import React from "react";
import { fetchUserInfoAction } from "features/authentication/action";
import { fetchMenuDataAction } from "features/main/action";
import { useDispatch } from "react-redux";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  const Home = React.lazy(() => import("features/main/pages/Home"));
  const UserProfile = React.lazy(() =>
    import("features/profileManagement/pages/UserProfile")
  );

  //Hooks
  useEffect(() => {
    dispatch(fetchUserInfoAction(9));
    dispatch(fetchMenuDataAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //Hooks

  return (
    <Router history={history}>
      <div className="App">
        <Suspense>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <PageTemplate path="/profile" Component={UserProfile} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
