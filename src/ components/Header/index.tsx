import Navigation from "../Navigation";
import Rating from "../Rating";

type Props = {
    title: string;
    subtitle?: string;
    rating?: number;
    image: string;
};
const Header: React.FC<Props> = ({ title, subtitle, rating, image }) => {
    return (
        <>
            <div
                className="h-72 relative bg-fixed bg-center bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url(${image})`,
                    opacity: 0.9,
                }}
            >
                <div className="bg-gradient-to-t from-white h-full px-6 pt-10">
                    <Navigation />
                    <h1 className="filter drop-shadow-sm flex-auto mb-4 text-3xl font-semibold text-red-900 capitalize">
                        {title}
                    </h1>
                    {rating ? (
                        <Rating level={rating} />
                    ) : (
                        <p className="filter drop-shadow text-xl text-red-700">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Header;
