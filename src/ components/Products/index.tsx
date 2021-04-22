import { request, gql } from "graphql-request";
import { useQuery } from "react-query";

const endpoint = "http://127.0.0.1/graphql";

function useProducts() {
    return useQuery("products", async () => {
        const data = await request(
            endpoint,
            gql`
                query {
                    products {
                        id
                        title
                        price {
                            price
                            currency {
                                id
                                sign
                            }
                        }
                    }
                }
            `
        );
        return data;
    });
}

const Products = () => {
    const { data, isLoading } = useProducts();

    const handelOnClick = () => {
        //redirct andere view
    };
    return (
        <>
            {isLoading && <p>Loading ...</p>}
            {data &&
                data.products?.map((product: any) => (
                    <div
                        key={product?.id}
                        className="bg-gray-100"
                        onClick={handelOnClick}
                    >
                        <img src={product?.img} />
                        <p className="text-pink-300">{product?.title}</p>
                        <p>{product?.price.price}</p>
                        <hr />
                    </div>
                ))}
        </>
    );
};

export default Products;
