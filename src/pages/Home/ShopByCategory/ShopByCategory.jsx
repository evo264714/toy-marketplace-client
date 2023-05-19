import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LegoCity from '../LegoCity/LegoCity';
import LegoArchitec from '../LegoArchitec/LegoArchitec';
import LegoCars from '../LegoCars/LegoCars';
import { useEffect, useState } from 'react';

const ShopByCategory = () => {
    const [legoCityCategory, setLegoCityCategory] = useState('Lego City');

    const handleCityCategory = (categoryName) =>{
        setLegoCityCategory(categoryName);
    }
    
    useEffect(() =>{
        fetch(`http://localhost:5000/toys?category=${legoCityCategory}`)
        .then(res => res.json())
        .then(data =>{
            setLegoCityCategory(data)
        })
    },[legoCityCategory])
    return (
        <Tabs>
            <TabList className='text-center'>
                <Tab>Lego City</Tab>
                <Tab>Lego Architecture</Tab>
                <Tab>Lego Cars</Tab>
            </TabList>

            <div className='text-center'>
            <TabPanel onClick={() =>handleCityCategory("Lego City")}>
                <LegoCity key={legoCityCategory._id}
                legoCityCategory={legoCityCategory}
                ></LegoCity>
            </TabPanel>
            <TabPanel>
                <LegoArchitec></LegoArchitec>
            </TabPanel>
            <TabPanel>
                <LegoCars></LegoCars>
            </TabPanel>
            </div>
        </Tabs>
    );
};

export default ShopByCategory;