import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login/Login";
import Registration from "./Components/Login/Registration/Registration";
import NotFound from "./Components/NotFound/NotFound";
import { Switch } from "react-router-dom";
import SingleItem from "./Components/SingleItem/SingleItem";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={`/`}>
            <Home></Home>
          </Route>
          <Route path={`/home`}>
            <Home></Home>
          </Route>
          <Route path={`/login`}>
            <Login></Login>
          </Route>
          <Route path={`/signup`}>
            <Registration></Registration>
          </Route>
          <Route path={`/singleitem/:id`}>
            <SingleItem></SingleItem>
          </Route>
          <Route path={`*`}>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
