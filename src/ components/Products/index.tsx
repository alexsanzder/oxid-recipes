import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

const Products = () => {
    const { data, isLoading } = useProducts();

    const handelOnClick = () => {
        //redirct andere view
    };
    return (
        <div className="container">
            <h1>Best choices</h1>
            <p>
                This are the hottest recipes right now... What are you waiting
                for? Try them!
            </p>
            {isLoading && <p>Loading ...</p>}
            {data &&
                data.products?.map((product: any) => (
                    <div
                        key={product?.id}
                        className="flex justify-center px-3 py-6"
                    >
                        <div className=" justify-betwee relative flex">
                            <img
                                className="absolute inset-0 object-cover w-32 h-32 border-2 border-green-600 rounded-full"
                                src={product?.imageGallery.thumb}
                                alt={product?.title}
                            />
                            <div className="pl-36 flex-auto w-full p-6 rounded-md shadow-md">
                                <div className="flex flex-wrap">
                                    <h1 className="flex-auto text-xl font-semibold text-red-400">
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
                    </div>
                ))}
        </div>
    );
};

export default Products;
