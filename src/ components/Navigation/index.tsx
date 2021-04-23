import { useHistory } from "react-router-dom";
type Props = {};
const Navigation: React.FC<Props> = ({}) => {
    let history = useHistory();
    return (
        <>
            <div className="flex justify-between w-full mb-10">
                <button
                    onClick={() => history.goBack()}
                    className="hover:bg-white hover:text-red-500 focus:outline-none px-4 pb-1 mx-4 text-sm font-semibold text-white bg-transparent rounded-lg"
                >
                    <svg
                        viewBox="0 0 32 32"
                        className="w-7 h-7"
                        aria-hidden="true"
                        fill="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z"
                        />
                    </svg>
                </button>
                <button className="hover:bg-white hover:text-red-500 focus:outline-none px-4 py-3 mx-4 text-sm font-semibold text-white bg-transparent rounded-lg">
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
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                </button>
            </div>
        </>
    );
};

export default Navigation;
