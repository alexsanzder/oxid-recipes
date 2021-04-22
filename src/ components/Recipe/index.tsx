import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import { RouteComponentProps } from "react-router-dom";
import Ingredients from "../Ingredients";
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

type TParams = { id: string };

const Recipe = ({ match }: RouteComponentProps<TParams>) => {
    const { data, isLoading } = useProducts();
    const { id } = match.params;
    console.log(id);

    return (
        <div className="container">
            {isLoading && <p>Loading ...</p>}
            <Ingredients />
        </div>
    );
};

export default Recipe;
