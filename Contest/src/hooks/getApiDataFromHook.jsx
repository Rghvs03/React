import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../Apis/ProductsApi";

export const getApiDataFromHook = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
