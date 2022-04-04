import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Breakfasts from '../Breakfasts/Breakfasts';
import Dinners from '../Dinners/Dinners';
import Lunches from '../Lunches/Lunches';

const FoodSection = () => {
    return (
        <div>
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="home" title="BreakFast">
         <Breakfasts></Breakfasts>
        </Tab>
        <Tab eventKey="profile" title="Lunch">
          <Lunches></Lunches>
        </Tab>
        <Tab eventKey="contact" title="Dinner" >
          <Dinners></Dinners>
        </Tab>
      </Tabs>
        </div>
    );
};

export default FoodSection;