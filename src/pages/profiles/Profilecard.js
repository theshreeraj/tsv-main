import React from 'react';
import './profilecard.css';

// function profilecard() {
//     return <div>
//         <h1>profilecard</h1>
//     </div>;
// }

// export default profilecard;


const Profilecard = ({ imgUrl, text }) => (
    <div className="tsv__profilecard-container_article">
        <div className="tsv__profilecard-container_article-image">
            <img src={imgUrl} alt="categoryimg" />
        </div>
        <div className="tsv__profilecard-container_article-content">
            <div>
                <h3>{text}</h3>
            </div>
        </div>
    </div>
);

export default Profilecard;
