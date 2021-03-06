import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Header from "../Header";

const endpoint = "http://127.0.0.1/graphql";

function useRecipes() {
    return useQuery("recipes", async () => {
        const data = await request(
            endpoint,
            gql`
                query {
                    recipes {
                        id
                        title
                        time
                        shortDesc
                        difficulty
                        picture
                        rating
                    }
                }
            `
        );
        return data;
    });
}

const Recipies = () => {
    const { data, isLoading } = useRecipes();

    return (
        <div className="container">
            <Header
                // title={data.title}
                // subtitle={data.subtitle}
                image="https://cdn.bbqpit.de/wp-content/uploads/2018/12/19001134/Spaghetti-Carbonara.jpg"
                title="Beste Auswahl"
                subtitle="Dies sind die heißesten Rezepte im Moment ... Worauf warten Sie noch? Versuch sie!"
            />
            {isLoading && <p>Loading ...</p>}
            {data &&
                data.recipes?.map((recipe: any) => (
                    <Link
                        className="flex items-center justify-center w-full h-40 px-3 py-6 mt-6"
                        key={recipe?.id}
                        to={`/recipie/${recipe?.id}`}
                    >
                        <div className="relative flex items-center justify-between w-full">
                            <img
                                className="w-36 h-36 absolute inset-0 object-cover border-2 border-green-600 rounded-full"
                                src={
                                    recipe?.picture
                                        ? recipe?.picture
                                        : "https://img.chefkoch-cdn.de/rezepte/1218391227356456/bilder/1248625/crop-960x640/der-beste-kaesekuchen-der-welt.jpg"
                                }
                                alt={recipe?.title}
                            />
                            <div className="flex-auto w-full p-5 ml-20 rounded-lg shadow-lg">
                                <div className="flex pl-16">
                                    <h1 className="flex-auto w-full text-xl font-semibold text-red-400 capitalize">
                                        {recipe?.title}
                                    </h1>
                                </div>
                                <div className="grid w-full grid-flow-col grid-cols-3 grid-rows-2 mt-4 text-center text-gray-500">
                                    <div className="mx-auto">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-lg font-semibold">
                                            {recipe?.rating}
                                        </span>
                                    </div>
                                    <div className="mx-auto">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="font-semibold capitalize">
                                        {recipe?.difficulty}
                                    </div>
                                    <div className="mx-auto">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-lg font-semibold">
                                            {recipe?.time}
                                        </span>
                                        <span className="text-sm"> min</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
        </div>
    );
};

export default Recipies;
