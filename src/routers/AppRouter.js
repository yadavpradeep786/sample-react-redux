import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../components/Home";

export const AppRouter = () => {
  return (
    <Router>
      <div className="auth__main">
        <div className="auth__box-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
