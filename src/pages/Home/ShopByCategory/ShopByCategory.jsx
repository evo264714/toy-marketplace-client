import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    return (
        <Tabs>
            <TabList className='text-center'>
                <Tab>Lego City</Tab>
                <Tab>Lego Architecture</Tab>
                <Tab>Lego Cars</Tab>
            </TabList>

            <div className='text-center'>
            <TabPanel>
                <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            </div>
        </Tabs>
    );
};

export default ShopByCategory;