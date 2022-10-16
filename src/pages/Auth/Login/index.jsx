import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

  // arrow functionsuz component tanımlama
function LoginForm({ error }) {
  
  const [details, setDetails] = useState({ username: "", password: "" });
  let history = useHistory();

  const submitHandler = (e) => {

    e.preventDefault();

    async function makeGetRequest() {
      let res = await axios.post("http://localhost:80/auth/login", details);

      let data = res.data;

      
      

      // basarili ise history push
      if (data.id) {
        //console.log('git')
        history.push("/scrumboard");
      }

      console.log(data);
    }
    makeGetRequest();
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/register"> Üye Ol </Link>
          </li>
          <Link to="/scrumboard"> anasayfa </Link>
        </ul>
      </nav>

      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>Login</h2>
          {error != "" ? <div className="error">{error}</div> : ""}
          <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) =>
                setDetails({ ...details, username: e.target.value })
              }
              value={details.username}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>
          <input type="submit" value="LOGIN" />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
