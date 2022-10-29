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
import { fetchUserInfoAction, fetchUserRentJob } from "features/authentication/action";
import { fetchMenuDataAction } from "features/main/action";
import { useDispatch } from "react-redux";


function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = localStorage.getItem("id");

  const Home = React.lazy(() => import("features/main/pages/Home"));
  const UserProfile = React.lazy(() =>
    import("features/profileManagement/pages/UserProfile")
  );
  const JobType = React.lazy(() => import("features/main/pages/JobType"));
  const SignIn = React.lazy(() =>
    import("features/authentication/pages/SignIn")
  );
  const SignUp = React.lazy(() =>
    import("features/authentication/pages/SignUp")
  );

  const Categories = React.lazy(() => import("features/main/pages/Categories"));
  const Detail = React.lazy(() => import("features/main/pages/Detail"));
  //Hooks
  useEffect(() => {
    if (userId) {
      dispatch(fetchUserInfoAction(userId));
      dispatch(fetchUserRentJob());
    }
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
            <PageTemplate path="/signin" Component={SignIn} />
            <PageTemplate path="/signup" Component={SignUp} />
            <PageTemplate path="/profile" Component={UserProfile} />
            <PageTemplate path="/jobtype/:id" Component={JobType} />
            <PageTemplate path="/categories/jobtype/:jobid/:tenLoaiCongViec/:tenChitiet" Component={Categories} />
            <PageTemplate path="/detail/jobtype/:jobid/:tenLoaiCongViec/:tenChitiet/:id" Component={Detail} />
            <PageTemplate path="/search" Component={Categories} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
