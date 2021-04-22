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
                    <div className="rounded-r-xl p-6 shadow-xl">
                        <div className="flex flex-wrap">
                            <h1 className="flex-auto mx-4 my-2 text-xl font-semibold">
                                Ingredients
                            </h1>
                            {/* {data &&
                                data.products?.map((product: any) => ( */}
                            <div className="w-full my-2">
                                <h2 className="flex-auto inline-block mx-4 text-xl font-semibold">
                                    3
                                </h2>
                                <p className="inline mx-4 text-sm">
                                    cups of water
                                </p>
                                <p className="inline mx-4 text-sm">price</p>
                                <button className="hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600 focus-visible:ring-offset-2 focus-visible:ring-offset-pink-900 px-4 py-3 mx-4 text-sm font-semibold text-white bg-red-400 rounded-lg">
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
