import Header from "./components/header"
import MasterView from "./components/masterview"
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import Login from "./components/login";
import Register from "./components/register"


function App() {
  return (
  <BrowserRouter>
      <div style={rootStyle}>
        <Header />
        <Switch>
          <Route exact path="/">
            <MasterView />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register"> 
            <Register/>
          </Route>
        </Switch>
      </div>
  </BrowserRouter>
  );
}

const rootStyle = {
  height: "100%"
}

export default App;
