
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import GallerySection from "../GallerySection/GallerySection";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    useTitle('Home')
    return (
        <div>
            
            <Banner></Banner>
            <GallerySection></GallerySection>
            <ShopByCategory></ShopByCategory>
            
        </div>
    );
};

export default Home;