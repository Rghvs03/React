import React from "react";
import { fetchusersdata } from "../Apis/UsersApi";
import { useQuery } from "@tanstack/react-query";

const Users = () => {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: fetchusersdata,
  });
  return <div>Users</div>;
};

export default Users;
