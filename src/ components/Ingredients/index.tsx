import { request, gql } from "graphql-request";
import { useQuery } from "react-query";

const endpoint = "http://127.0.0.1/graphql";

function useIngredients() {
    return useQuery("ingredients", async () => {
        const data = await request(
            endpoint,
            gql`
                query {
                    recipe (id: ) {
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
                    <div className="shadow-xl rounded-r-xl p-6">
                        <div className="flex flex-wrap">
                            <h1 className="flex-auto text-xl font-semibold my-2 mx-4">
                                Ingredients
                            </h1>
                            {/* {data &&
                                data.products?.map((product: any) => ( */}
                                    <div className="w-full my-2">
                                        <h2 className="flex-auto text-xl font-semibold inline-block mx-4">
                                            3
                                        </h2>
                                        <p className="text-sm inline mx-4">cups of water</p>
                                        <p className="text-sm inline mx-4">price</p>
                                        <button className="text-sm font-semibold bg-pink-300 text-white py-3 px-4 rounded-lg hover:bg-pink-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600 focus-visible:ring-offset-2 focus-visible:ring-offset-pink-900 mx-4">
                                            +
                                        </button>
                                    </div>
                            {/* ))} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ingredients;
