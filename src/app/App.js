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
  const JobType = React.lazy(() => import("features/main/pages/JobType"));
  const Categories = React.lazy(() => import("features/main/pages/Categories"));
  const Detail = React.lazy(() => import("features/main/pages/Detail"));
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
            <PageTemplate path="/jobtype/:id" Component={JobType} />
            <PageTemplate path="/categories/:tenLoaiCongViec/:tenChitiet" Component={Categories} />
            <PageTemplate path="/detail/:tenLoaiCongViec/:tenChitiet/:id" Component={Detail} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
