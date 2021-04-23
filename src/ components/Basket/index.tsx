import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import { RouteComponentProps } from "react-router-dom";
import Header from "../Header";
import {ReactElement} from "react";
const endpoint = "http://127.0.0.1/graphql";

function useBasket(basketId: string) {
    return useQuery(["basket", basketId], async () => {
        const data = await request(
            endpoint,
            gql`
                query {
                    basket(id: "${basketId}") {
                        items {
                            product {
                                id
                                title
                                price {
                                    currency {
                                        sign
                                    }
                                }
                                imageGallery {
                                    thumb
                                }
                            }
                            id
                            amount
                        }
                    }
                }
            `
        );
        return data;
    });
}

type Props = { id: string };

const Basket = ({ match }: RouteComponentProps<Props>) => {
    const { id } = match.params;
    const { data, isLoading } = useBasket(id);

    return (
        <div className="container">
            {isLoading && <p>Loading ...</p>}
            {data && (
                <div>
                    <Header
                        // title={data.title}
                        // subtitle={data.subtitle}
                        // image={data.product.imageGallery.thumb}
                        title="title test"
                        subtitle="subtitle test"
                    />
                </div>
            )}
        </div>
    );
};

export default Basket;
