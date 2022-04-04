import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./scrumboard.css";
import axios from "axios";
import ScrumBoardItem from "../../components/ScrumBoardItem";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtdXNhIiwiaWF0IjoxNjQ4NzM2Njg0LCJleHAiOjE2NDg3NDM4ODR9.a3T6T55xpfYBVgEQmppGrJ3XSsO3FwptTfsYjb5E6Ts";

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

const ScrumBoard = () => { 
  let history = useHistory();
  const [scrumboarddata, setScrumBoardData] = useState();

  const addnewboard = () => {
    history.push("/mainboard");
  };

  async function makeGetRequest() {
    let res = await axios.get("http://localhost:80/board", config);
    let data = res.data;

    return data;
  }

  useEffect(async () => {
    setScrumBoardData(await makeGetRequest());
  }, []); // bağımlı değişken

  console.log(scrumboarddata);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "5px",
        alignContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        width: "50em",
        justifyContent: "center",
      }}
    >
      {scrumboarddata.map((item)=>{
        return <ScrumBoardItem item={item} />
      })}
    </div>
  );

  // scrumboard olacak
  // ortala, arkaplan rengi, button rengi
  // <div>
  //   <div className="deneme" >
  //     <button  onClick={() => {}}>ACME FronendBord</button>
  //   </div>

  //   <button onClick={() => {}}>BackendBord</button>
  //   <button onClick={() => addnewboard()}>Add new board</button>

  // </div>
  // )
};

export default ScrumBoard;
