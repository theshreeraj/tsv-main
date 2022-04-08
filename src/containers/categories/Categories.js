import React from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Card from '../../components/card/Card';
import { event01, wedding02, portrait03, product04, baby05, prewedding06, bday07, achitecture08 } from './imports';
import './categories.css';

const Categories = () => (
    <div className="tsv__category section__padding" id="blog">
        <div className="tsv__category-container_groupB">
            <Card imgUrl={wedding02} text="Wedding" />
            <Link to="/portrait"><Card imgUrl={portrait03} text="Portrait" /></Link>
            <Card imgUrl={product04} text="Product" />
            <Card imgUrl={event01} text="Event" />
        </div>
        <div className="tsv__category-container_groupB">
            <Card imgUrl={baby05} text="Babyshoot" />
            <Card imgUrl={prewedding06} text="Preweddig" />
            <Card imgUrl={bday07} text="Birthday" />
            <Card imgUrl={achitecture08} text="Architecture" />
        </div>

    </div>
);

export default Categories;
