import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import { RouteComponentProps } from "react-router-dom";
import Ingredients from "../Ingredients";
import Steps from "../Steps";
import Header from "../Header";

const endpoint = "http://127.0.0.1/graphql";

function useRecipes(recipeId: string) {
    return useQuery(["recipes", recipeId], async () => {
        const data = await request(
            endpoint,
            gql`
                query {
                    recipe(id: "${recipeId}") {
                        ingredients {
                            id
                            product {
                                id
                                title
                                price {
                                    price
                                        currency {
                                            sign
                                    }
                                }
                            }
                            amount
                        }
                        steps {
                            number
                            text
                        }
                        id
                        title
                        time
                        shortDesc
                        difficulty
                        picture
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
    const { data, isLoading } = useRecipes(id);

    return (
        <div className="container">
            {isLoading && <p>Loading ...</p>}
            {data && (
                <div>
                    <Header
                        image={data.recipe.picture}
                        title={data.recipe.title}
                        subtitle={data.recipe.shortDesc}
                        rating={4}
                    />
                    <Ingredients
                        // temporally used  the array of images as prop
                        ingredients={data.recipe.ingredients}
                    />
                    <Steps
                        // temporally used the array of images as prop
                        steps={data.recipe.steps}
                    />
                </div>
            )}
        </div>
    );
};

export default Recipe;
