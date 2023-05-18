import backgroundImage from '../../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="flex bg-gradient-to-r from-yellow-400 via-green-500 to-blue-600 py-8 w-10/12 mx-auto">
            <div className="w-1/2 my-auto">
                <h1 className="text-black text-4xl font-bold text-center">
                    Welcome To Play Land
                </h1>
                <p className="text-black text-lg text-center mt-4">
                    A reliable e-commerce website for kids toys. Enjoy your shopping!
                </p>
            </div>
            <div className="flex w-1/2 items-center p-8">
                <img src={backgroundImage} alt="Banner Image" className="rounded-xl" />
            </div>
        </div>
    );
};

export default Banner;