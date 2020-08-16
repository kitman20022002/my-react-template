import React, {FunctionComponent} from 'react'; // we need this to make JSX compile
import './Categories.scss';
import Canvas from "../../components/Canvas/Canvas";
type  CategoriesProps = {
    class: string
    title: string
}

export const Categories: FunctionComponent<CategoriesProps> = (props) =>
    <div className={props.class}>
        <h3>{props.title}</h3>
        <Canvas/>
        <div className={"full-width"}>
            {props.children}
        </div>
    </div>;

export default Categories;
