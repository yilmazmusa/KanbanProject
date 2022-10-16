import React, { useEffect, useState } from "react";
import Icon from "@mui/material/Icon";
import { red, yellow } from "@mui/material/colors";
import axios from "axios";
import List from "../List";

export default function AddAList() {
  
  const [itemName, setItemName] = useState({title:"", borderId:""});
  const [isShown, setIsShown] = useState(true);

  const onClick = () => setIsShown(false)

  // const [details, setDetails] = useState({request:""})

  //   async function makeGetRequest1() {
  // let res = await axios.post("http://localhost:80/auth/BURAYAGELECEK",burayada)
  // let data  = res.data
  //   }

  async function makeGetRequest() {
    let res = await axios.post("http://localhost:80/list", itemName);
    let data = res.data;
  }
  makeGetRequest();

  console.log("isim", itemName);

  return (
    <div // block element
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "100px",
        paddingLeft: 10,
        borderColor: "gray",
        border: "3px solid rgba(0, 0, 0, 0.5)",
        borderRadius: 10,
        cursor: "pointer",
        display: "flex",
      }}
      // onMouseEnter={() => setIsShown(true)}
      // onMouseLeave={() => setIsShown(false)}
      onClick={onClick} //onMouse yerine onClick yaptık
    >
      {isShown ? (
        <form onSubmit>
          <label>
            Add a Lists
            <input
              type="text"
              onChange={(e) => {
                setItemName(...itemName,  e.target.value);
              }}
              value={itemName}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon sx={{ color: red[500] }}>add_circle</Icon>
          <h4>Add a list</h4>
        </div>
      )}
    </div>
  );
}
