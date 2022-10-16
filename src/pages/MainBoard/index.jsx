import React from "react";
import AddAList from "../../components/AddAList";
import Header from "../../components/Header";
import List from "../../components/List";

function MainBoard() {
 
  return <div style={{

    
    display:"flex",
    flexDirection:"row",

    
    
  }}>
    <div>

      <Header/>
      <AddAList/>
      <List/>


    </div>
      
  </div>;
}

export default MainBoard;
