import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Breakfasts from '../Breakfasts/Breakfasts';
import Dinners from '../Dinners/Dinners';
import Lunches from '../Lunches/Lunches';

const FoodSection = () => {
    return (
        <div className='my-5'>
        <Tabs defaultActiveKey="BreakFast" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="BreakFast" title="BreakFast">
            <Breakfasts></Breakfasts>
            </Tab>
            <Tab eventKey="Lunch" title="Lunch">
            <Lunches></Lunches>
            </Tab>
            <Tab eventKey="Dinner" title="Dinner" >
            <Dinners></Dinners>
            </Tab>
      </Tabs>
        </div>
    );
};

export default FoodSection;