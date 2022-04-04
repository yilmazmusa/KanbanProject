import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

const Register = ({ Register, error }) => { // arrow functionlu  component tanımlama
  const [details, setDetails] = useState({username: "", password: "", passwordConfirm: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    async function makeGetRequest() {
      let res = await axios.post("http://localhost:80/auth/register", details);

      let data = res.data;
      console.log(data);
    }

    makeGetRequest();

    //Register("istek at",details);
    console.log("Kayıt OL");
  };
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/"> Giriş Yap </Link>{" "}
          </li>{" "}
        </ul>{" "}
      </nav>

      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>Kayıt Ekranı</h2>
          {/*ERROR*/}
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

                
          <div className="form-group">
            <label htmlFor="passwordConfirm">PasswordConfirm : </label>
            <input
              type="passwordConfirm"
              name="passwordConfirm"
              id="passwordConfirm"
              onChange={(e) =>
                setDetails({ ...details, passwordConfirm: e.target.value })
              }
              value={details.passwordConfirm}
            />
          </div>


          <input type="submit" value="Kayıt Ol" />
        </div>
      </form>
    </div>
  );
};

export default Register;
