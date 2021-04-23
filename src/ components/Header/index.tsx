import Navigation from "../Navigation";

type Props = {
    title: string;
    subtitle: string|React.Component;
    // image: any;
};
const Header: React.FC<Props> = ({ title, subtitle }) => {
    return (
        <>
            <div  className="relative bg-fixed bg-center bg-cover bg-no-repeat h-72 " style={{backgroundImage: `url("https://cdn.bbqpit.de/wp-content/uploads/2018/12/19001134/Spaghetti-Carbonara.jpg")`}}>
                <div className="bg-gradient-to-t from-white py-8 px-6 h-full">
                    <Navigation />
                    <h1 className="flex-auto my-2 text-3xl font-semibold capitalize text-white mb-8">
                        {title}
                    </h1>
                    <p className="text-xl">
                        {subtitle}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Header;
