import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import LegoCity from './../LegoCity/LegoCity';

const ShopByCategory = () => {
    const [toys, setToys] = useState([])
    const [activeName, setActiveName] = useState('Lego City');
    // console.log(toys);

    const handleTab = name => {
        setActiveName(name);
    }
    useEffect(() => {
        fetch(`https://toy-marketplace-server-mu-ten.vercel.app/toys?category=${activeName}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [activeName])


    return (
        <Tabs className='bg-blue-900 w-10/12 mx-auto my-8'>
            <TabList className='text-center 'style={{ cursor: "pointer" }}>
                <Tab className='text-warning' onClick={() => handleTab('Lego City')}>Lego City</Tab>
                <Tab className='text-warning' onClick={() => handleTab('Lego Architecture')}>Lego Architecture</Tab>
                <Tab className='text-warning' onClick={() => handleTab('Lego Cars')}>Lego Cars</Tab>
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