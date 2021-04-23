import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import { RouteComponentProps } from "react-router-dom";
import Ingredients from "../Ingredients";
import Steps from "../Steps";
import Header from "../Header";

const endpoint = "http://127.0.0.1/graphql";

function useProduct(recipeId: string) {
    return useQuery(["product", recipeId], async () => {
        const data = await request(
            endpoint,
            gql`
                query {
                    product(id: "${recipeId}") {
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
                            images {
                                image
                            }
                        }
                    }
                }
            `
        );
        return data;
    });
}

type Props = { id: string };
const Recipe = ({ match }: RouteComponentProps<Props>) => {
    const { id } = match.params;
    const { data, isLoading } = useProduct(id);

    return (
        <div className="container">
            {isLoading && <p>Loading ...</p>}
            {data && (
                <div>
                    <Header
                        // title={data.title}
                        // subtitle={data.subtitle}
                        image={data.product.imageGallery.thumb}
                        title={data.product.title}
                        // subtitle="subtitle test"
                        rating={4}
                    />
                    <Ingredients
                        // temporally used  the array of images as prop
                        ingredients={data.product.imageGallery.images}
                    />
                    <Steps
                        // temporally used the array of images as prop
                        steps={data.product.imageGallery.images}
                    />
                </div>
            )}
        </div>
    );
};

export default Recipe;
