
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import ExtraFirstSection from "../ExtraFirstSection/ExtraFirstSection";
import ExtraSecondSection from "../ExtraSecondSection/ExtraSecondSection";
import GallerySection from "../GallerySection/GallerySection";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    useTitle('Home')
    return (
        <div>
            
            <Banner></Banner>
            <GallerySection></GallerySection>
            <ShopByCategory></ShopByCategory>
            <ExtraFirstSection></ExtraFirstSection>
            <ExtraSecondSection></ExtraSecondSection>
            
        </div>
    );
};

export default Home;