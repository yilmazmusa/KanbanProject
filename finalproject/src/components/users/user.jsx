import React from "react";
import { useParams } from "react-router";

const Users = () => {
  const {id} = useParams()
  return (
  <div>
      <h1>
          User ID: {id}
      </h1>
    </div>
    )
};
export default Users;
