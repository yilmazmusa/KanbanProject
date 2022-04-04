import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from "./pages/Auth/Register";
import LoginForm from "./pages/Auth/Login";
import ScrumBoard from "./pages/ScrumBoard";
import MainBoard from "./pages/MainBoard";


function App() {
  // const adminUser = {
  //   email: "musa@gmail.com",
  //   password: "123456",
  // };

  // const [user, setUser] = useState({
  //   username: "",
  //   email: "",
  // });
  // const [error, setError] = useState("");

  // const Login = (details) => {
  //   console.log(details);
  //   if (
  //     details.username == adminUser.username &&
  //     details.password == adminUser.password
  //   ) {
  //     console.log("Loggen In");
  //     setUser({
  //       username: details.username,
  //       email: details.email,
  //     });
  //   } else {
  //     console.log("Details do not match!");

  //     setError("Details do not match!");
  //   }
  // };

  // const Logout = () => {
  //   setUser({ username: "", email: "" });
  // };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginForm />
        </Route>
        
        <Route path="/register">
          <Register />
        </Route>

        <Route path="/scrumboard">
          <ScrumBoard />
        </Route>

        <Route path="/mainboard">
          <MainBoard />
        </Route>

      </Switch>
    </Router>
  );
}
export default App;
