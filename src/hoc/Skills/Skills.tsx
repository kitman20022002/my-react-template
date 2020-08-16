import React, {FunctionComponent} from 'react'; // we need this to make JSX compile
import './Skills.css';
import CanvasImage from "../../components/CanvasImage/CanvasImage";

type  SkillsProps = {
    title: string
    class: string
}

export const Skills: FunctionComponent<SkillsProps> = (props) =>
    <div className={props.class}>
        <h2><span className={"theme--color"}>{" > "}</span>{props.title}</h2>
        <CanvasImage />
        <div>
            {props.children}
        </div>
    </div>;

export default Skills;
