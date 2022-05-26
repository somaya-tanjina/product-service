import { useQuery } from "react-query";

const useProductDetails = (id) => {
    const { data, isLoading, refetch } = useQuery(["productDetail", id], () =>
        fetch(
            `https://frozen-everglades-15145.herokuapp.com/product/${id}`
        ).then((res) => res.json())
    );
    return [data, isLoading, refetch];
};
export default useProductDetails;
