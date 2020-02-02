import React from 'react';
import HomeColumn from './HomeColumn';

const homeThreeColumns = (props) => {
    return (
        <div className="columns">
            <div className="container">
                <HomeColumn number='10' title='ODDANYCH WORKÓW' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' />
                <HomeColumn number='5' title='WSPARTYCH ORGANIZACJI' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' />
                <HomeColumn number='7' title='ZORGANIZOWANYCH ZBIÓREK' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' />
            </div>
            
        </div>
    );
}

export default homeThreeColumns;