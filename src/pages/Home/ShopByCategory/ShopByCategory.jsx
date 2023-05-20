import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import LegoCity from './../LegoCity/LegoCity';

const ShopByCategory = () => {
    const [toys, setToys] = useState([])
    const [categoryName, setCategoryName] = useState('Lego City');
    // console.log(toys);

    const handleLegoCity = name => {
        setCategoryName(name);
    }
    useEffect(() => {
        fetch(`http://localhost:5000/toys?category=${categoryName}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [categoryName])


    return (
        <Tabs>
            <TabList className='text-center'>
                <Tab onClick={() => handleLegoCity('Lego City')}>Lego City</Tab>
                <Tab onClick={() => handleLegoCity('Lego Architecture')}>Lego Architecture</Tab>
                <Tab onClick={() => handleLegoCity('Lego Cars')}>Lego Cars</Tab>
            </TabList>

            <div className='text-center'>

                <TabPanel>
                    <LegoCity toys={toys}></LegoCity>
                </TabPanel>
                <TabPanel>
                    <LegoCity toys={toys}></LegoCity>
                </TabPanel>
                <TabPanel>
                    <LegoCity toys={toys}></LegoCity>
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default ShopByCategory;