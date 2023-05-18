import backgroundImage from '../../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="flex bg-gray-800 py-8 w-10/12 mx-auto">
            <div className="flex-1">
                <h1 className="text-white text-4xl font-bold text-center">
                    Welcome to My Website
                </h1>
                <p className="text-white text-lg text-center mt-4">
                    Enjoy your stay!
                </p>
            </div>
            <div className="flex items-center pr-8">
                <img src={backgroundImage} alt="Banner Image" className="max-h-40" />
            </div>
        </div>
    );
};

export default Banner;