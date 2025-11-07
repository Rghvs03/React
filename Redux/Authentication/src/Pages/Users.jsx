import React from "react";
import { getUsersDatafromHook } from "../hooks/getUsersDatafromHook";

const Users = () => {
  // eslint-disable-next-line no-unused-vars
  let { data, isPending, error } = getUsersDatafromHook();
  if (data) {
    console.log(data);
  }

  return <div>Users</div>;
};

export default Users;
