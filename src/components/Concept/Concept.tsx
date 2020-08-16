import React from 'react'; // we need this to make JSX compile
import './Concept.css';
import {FaCheck} from 'react-icons/fa';
import {IconContext} from "react-icons";

type ConceptProps = {
    title: string,
    hasComplete: boolean
}

export const Concept = ({title, hasComplete}: ConceptProps) =>
    <div className={"card__concept"}>

        <h4 className={"text-left"}>{title}</h4>
        <p className={"text-center"}>
            {hasComplete ? <IconContext.Provider value={{
                color: "green",
                className: "global-class-name"
            }}><FaCheck/></IconContext.Provider> : "In Progress"}
        </p>
        <div className={"text-right"}>
            <a className="button--xs" href={"www.google.com"}>See more</a>
        </div>
    </div>;

export default Concept;
