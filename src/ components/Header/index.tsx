import Navigation from "../Navigation";
import Rating from "../Rating";

type Props = {
    title: string;
    subtitle?: string | React.Component;
    rating?: number;
    // image: any;
};
const Header: React.FC<Props> = ({ title, subtitle, rating }) => {
    return (
        <>
            <div
                className=" relative h-56 bg-fixed bg-center bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url("https://cdn.bbqpit.de/wp-content/uploads/2018/12/19001134/Spaghetti-Carbonara.jpg")`,
                }}
            >
                <div className="bg-gradient-to-t from-white h-full px-6 pt-12">
                    <h1 className="flex-auto my-2 mb-4 text-3xl font-semibold text-white capitalize">
                        {title}
                    </h1>
                    {rating ? (
                        <Rating level={rating} />
                    ) : (
                        <p className="text-xl">{subtitle}</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Header;
