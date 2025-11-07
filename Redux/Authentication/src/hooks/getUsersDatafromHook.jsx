import { useQuery } from "@tanstack/react-query";
import { fetchusersdata } from "../Apis/UsersApi";

export const getUsersDatafromHook = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return  useQuery({
    queryKey: ["users"],
    queryFn: fetchusersdata,
  });

};
