import { request, gql } from "graphql-request";
import { useQuery } from "react-query";

const endpoint = "http://127.0.0.1/graphql";

function useIngredients() {
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

const Ingredients = () => {
    const { data, isLoading } = useIngredients();

    const handelOnClick = () => {
        //redirct andere view
    };
    return (
        <>
            {isLoading && <p>Loading ...</p>}
            <div className="flex">
                <div className="flex-auto p-6">
                    <div className="flex flex-wrap">
                        <h1 className="flex-auto text-xl font-semibold">
                            Ingredients
                        </h1>
                    
                        {data &&
                            data.products?.map((product: any) => (
                                <div>
                                    <h2 className="flex-auto text-xl font-semibold">
                                        3
                                    </h2>
                                    <p className="text-sm text-gray-500">cups of water</p>
                                </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ingredients;
