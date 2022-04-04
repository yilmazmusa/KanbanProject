import React, { useState } from "react";
import "./header.css";
import axios from "axios";
import logoUrl from "./../../assets/logo.svg";
import { ConstructionOutlined } from "@mui/icons-material";

// localstorageden alınacak token

const Header = () => {
  const [itemName, setItemName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("itermName", itemName);

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwidXNlcm5hbWUiOiJidXJhayIsImlhdCI6MTY0ODY3NjkwNCwiZXhwIjoxNjQ4Njg0MTA0fQ.iEBPRRShw8BZeT2j6gxTB6c-kxlNTqUv6LtKlZFBn64";

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    async function makeGetRequest() {
      let res = await axios.post(
        "http://localhost:80/board",
        { title: itemName },
        config
      );

      let data = res.data;

      //basarili ise history push

      console.log(data);
      setItemName("");
    }
    makeGetRequest();
  };

  return (
    <div className="header">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="board name"
          onChange={(e) => {
            setItemName(e.target.value);
          }}
          value={itemName}
        />
        <input type="submit" value="Add" />
      </form>
      <img src={logoUrl} alt="Tesla" />
    </div>
  );
};
export default Header;
