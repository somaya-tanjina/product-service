import { useQuery } from "react-query";

const useProducts = () => {
  const {
      data,
      isLoading,
      refetch,
  } = useQuery("product", () =>
      fetch("http://localhost:5000/products").then((res) => res.json())
    );
  return [ data, isLoading,refetch ]
}
export default useProducts;