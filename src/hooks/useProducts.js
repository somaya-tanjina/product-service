import { useQuery } from "react-query";

const useProducts = () => {
    const { data, isLoading, refetch } = useQuery("product", () =>
        fetch("https://frozen-everglades-15145.herokuapp.com/products").then(
            (res) => res.json()
        )
    );
    return [data, isLoading, refetch];
};
export default useProducts;
