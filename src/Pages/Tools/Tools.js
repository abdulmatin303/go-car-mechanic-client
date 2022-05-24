import React, { createContext, useState } from 'react';
import AvailableTools from './AvailableTools';
import ToolsBanner from './ToolsBanner';

export const DateContext = createContext('myDate');

const Tools = () => {
    const [date, setDate] = useState(new Date());
    
    return (
        <DateContext.Provider value={date}>
            <div>
            <ToolsBanner date={date} setDate={setDate}></ToolsBanner>
            <AvailableTools></AvailableTools>
            
        </div>
        </DateContext.Provider>
    );
};

export default Tools;