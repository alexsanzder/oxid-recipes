import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

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
                                sign
                            }
                        }
                        imageGallery {
                            thumb
                        }
                    }
                }
            `
        );
        return data;
    });
}

const Recipies = () => {
    const { data, isLoading } = useProducts();

    return (
        <div className="container">
            <h1 className="text-3xl font-semibold">Best choices</h1>
            <p className=" text-xl">
                This are the hottest recipes right now... What are you waiting
                for? Try them!
            </p>
            {isLoading && <p>Loading ...</p>}
            {data &&
                data.products?.map((product: any) => (
                    <Link
                        className="flex justify-center w-full px-3 py-6 mt-6"
                        key={product?.id}
                        to={`/recipie/${product?.id}`}
                    >
                        <div className="justify-betwee relative flex w-full">
                            <img
                                className="absolute inset-0 object-cover w-32 h-32 border-2 border-green-600 rounded-full"
                                src={product?.imageGallery.thumb}
                                alt={product?.title}
                            />
                            <div className="flex-auto w-full p-6 pl-16 ml-24 rounded-lg shadow-lg">
                                <div className="flex flex-wrap">
                                    <h1 className="flex-auto text-xl font-semibold text-red-400 capitalize">
                                        {product?.title}
                                    </h1>
                                    <div className="text-xl font-semibold text-gray-500">
                                        {product?.price.currency.sign}{" "}
                                        {product?.price.price}{" "}
                                    </div>
                                    <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500"></div>
                                </div>

                                <p className="text-sm text-gray-500">
                                    Free shipping on all continental DE orders.
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
        </div>
    );
};

export default Recipies;
