import React from 'react';
import Profilecard from '../Profilecard';
import { wed01, wed02, wed03, wed04, wed05, wed08, wed07, wed06 } from './import';

const Portfolioprofile = () => {
    return <div className="tsv__category section__padding" id="blog">
        <div className="tsv__category-container_groupB">
            <Profilecard imgUrl={wed01} text="Wedding" />
            <Profilecard imgUrl={wed02} text="Portrait" />
            <Profilecard imgUrl={wed03} text="Product" />
            <Profilecard imgUrl={wed04} text="Event" />
            <Profilecard imgUrl={wed05} text="White Knite Studio" />
            <Profilecard imgUrl={wed06} text="Babyshoot" />
            <Profilecard imgUrl={wed07} text="Preweddig" />
            <Profilecard imgUrl={wed08} text="Birthday" />
        </div>
    </div>
};

export default Portfolioprofile;
