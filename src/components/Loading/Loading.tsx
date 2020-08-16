import React from 'react'; // we need this to make JSX compile
import './Loading.scss';


export const Loading = () =>
    <div id="facebook">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <p>Loading</p>
    </div>;

export default Loading;
