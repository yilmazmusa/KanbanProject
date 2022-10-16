import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router";

export default function ScrumBoardItem(props) {

  let history = useHistory();

    const addnewboard = () => {
        history.push("/mainboard");
        
      };



      console.log('15aa', props.item)

  return (
    <Card sx={{ minWidth: 10, maxWidth: 200 }} variant="outlined">
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          style={{
            textAlign: "center",
          }}
        >{props.item.title}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={addnewboard} fonts="small">
          {" "}
          Add new Board
        </Button>
      </CardActions>
    </Card>
  );
}
