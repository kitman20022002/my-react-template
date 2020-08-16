import React from 'react';
import Concept from "../../components/Concept/Concept";

import Skills from "../../hoc/Skills/Skills";
import {RouteComponentProps} from 'react-router-dom'
import Categories from "../../hoc/Categories/Categories";
import Loading from "../../components/Loading/Loading";
import {getTitlesWithSkillsByTitle} from "../../api/kitmanyiuapis";


interface IHomeProps extends RouteComponentProps<{ title: string }> {
    defaultDataValue: Titles
    defaultIsLoading: true
}

interface IHomeState {
    data: Titles
    isLoading: boolean
}

interface ServerResponse {
    data: Titles
}

interface Titles {
    name: string
    categories: Array<Categories>
}

interface Categories {
    name: string
    concepts: Array<Concepts>
}

interface Concepts {
    id: number
    name: string
    status: string
    category_id: string,
    link: null | string
}

type PathParamsType = {
    title: string,
}

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> & {
    defaultDataValue: Titles
    defaultIsLoading: true
}

export class Home extends React.Component<IHomeProps, IHomeState> {
    constructor(props: IHomeProps) {
        super(props);
        this.state = {data: this.props.defaultDataValue, isLoading: true};
    }

    componentDidMount = async () => {
        let res = await getTitlesWithSkillsByTitle(this.props.match.params.title);
        this.setState({data: res.data, isLoading: false});
    };

    // render will know everything!
    render() {
        let screen = <Loading/>;
        if (!this.state.isLoading) {
            screen = (<div className="App">
                <header className="App-header">
                    <h1>Kitman Skills</h1>
                </header>
                <Skills title={this.state.data.name} class={"card__categories"}>
                    {this.state.data.categories.map((category) =>
                        <Categories title={category.name} key={category.name} class={"card__categories flex"}>
                            {category.concepts.map((concept) =>
                                <Concept title={concept.name} key={concept.name}
                                         hasComplete={concept.status === 'Completed'}/>
                            )}
                        </Categories>
                    )}
                </Skills>
            </div>);
        }

        return screen;
    }
}

export default Home;
