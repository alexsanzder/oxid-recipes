import { request, gql } from "graphql-request";
import { useQuery } from "react-query";

const endpoint = "http://127.0.0.1/graphql";

function useSteps() {
    return useQuery("steps", async () => {
        const data = await request(
            endpoint,
            gql`
                query {
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

const Steps = () => {
    const { data, isLoading } = useSteps();

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
                                Step by step
                            </h1>
                            {/* {data &&
                                data.products?.map((product: any) => ( */}
                                    <div className="w-full my-2">
                                        <p className=" flex text-sm inline">
                                            <h2 className="text-xl font-semibold inline-block mx-4 text-pink-300">
                                                1.
                                            </h2>
                                            <p className="flex-auto inline-block mx-8 text-xl">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                            </p>
                                        </p>
                                        <br />
                                        <p className=" flex text-sm inline">
                                            <h2 className="text-xl font-semibold inline-block mx-4 text-pink-300">
                                                2.
                                            </h2>
                                            <p className="flex-auto inline-block mx-8 text-xl">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                            </p>
                                        </p>
                                        <br />
                                        <p className=" flex text-sm inline">
                                            <h2 className="text-xl font-semibold inline-block mx-4 text-pink-300">
                                                3.
                                            </h2>
                                            <p className="flex-auto inline-block mx-8 text-xl">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                            </p>
                                        </p>
                                    </div>
                            {/* ))} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Steps;
