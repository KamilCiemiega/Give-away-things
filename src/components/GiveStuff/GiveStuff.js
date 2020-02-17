import React from 'react';
import GiveStuffHeader from './GiveStuffComponents/GiveStuffHeader';
import GiveStuffForm from './GiveStuffComponents/GiveStuffForm';

const giveStuff = () => {
    return(
        <div className="giveStuff__Container flex">
            <GiveStuffHeader/>
            <GiveStuffForm/>
        </div>
    );
}

export default giveStuff;