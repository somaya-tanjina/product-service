import { useQuery } from "react-query";

const useProductDetails = (id) => {
  const { data, isLoading, refetch } = useQuery(["productDetail", id], () =>
      fetch(`http://localhost:5000/product/${id}`).then((res) => res.json())
  );
  return [data, isLoading, refetch]
}
export default useProductDetails