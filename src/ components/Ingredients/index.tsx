type Props = {
    ingredients: any;
};
const Ingredients: React.FC<Props> = ({ ingredients }) => {
    return (
        <>
            <div className="flex">
                <div className="flex-auto p-6">
                    <div className="rounded-r-xl p-6 shadow-xl">
                        <div className="flex flex-wrap">
                            <h1 className="flex-auto mx-4 my-2 text-xl font-semibold">
                                Ingredients
                            </h1>
                            {ingredients &&
                                ingredients?.map((ingredient: any) => (
                                    <div className="flex items-center justify-between w-full my-2">
                                        <div className="flex-1">
                                            <h2 className="flex-auto inline-block mx-4 text-xl font-semibold">
                                                3
                                            </h2>
                                            <p className="inline mx-4 text-sm">
                                                cups of water
                                            </p>
                                            <p className="inline mx-4 text-sm">
                                                price
                                            </p>
                                        </div>
                                        <button className="hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-pink-900 px-4 py-3 mx-4 text-sm font-semibold text-white bg-red-400 rounded-lg">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ingredients;
