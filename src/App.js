import "./styles.css";
import { Switch, Route } from "react-router";
import Navbar from "./Navbar";
import Signin from "./Signin";
import Signup from "./Signup";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <Switch>
          <Route exact path="/signin">
            <Signin />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </>
  );
}
