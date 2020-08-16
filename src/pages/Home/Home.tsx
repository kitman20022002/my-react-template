import React from 'react';
import Concept from "../../components/Concept/Concept";
import "./Home.scss"
import Skills from "../../hoc/Skills/Skills";

import Categories from "../../hoc/Categories/Categories";
import Loading from "../../components/Loading/Loading";
import {getTitlesWithSkills} from "../../api/kitmanyiuapis";

interface IHomeProps {
    defaultDataValue: Array<TitlesProps>
    defaultIsLoading: true
}

interface IHomeState {
    data: Array<TitlesProps>
    isLoading: boolean
}

interface ServerResponse {
    data: Array<TitlesProps>
}

interface TitlesProps {
    name: string
    categories: Array<CategoriesProps>
}

interface CategoriesProps {
    name: string
    concepts: Array<ConceptsProps>
}

interface ConceptsProps {
    id: number
    name: string
    status: string
    category_id: string,
    link: null | string
}

export class Home extends React.Component<IHomeProps, IHomeState> {
    constructor(props: IHomeProps) {
        super(props);
        this.state = {data: this.props.defaultDataValue, isLoading: true};
    }

    componentDidMount = async () => {
        let res = await getTitlesWithSkills();
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
                {this.state.data.map((title) =>
                    <Skills title={title.name}
                            class={"card__categories"}
                            key={title.name}>
                        {title.categories.map((category) =>
                            <Categories title={category.name}
                                        class={"card__categories flex"}
                                        key={category.name}>
                                {category.concepts.map((concept) =>
                                    <Concept title={concept.name}
                                             hasComplete={concept.status === 'Completed'}
                                             key={concept.name}/>
                                )}
                            </Categories>
                        )}
                    </Skills>
                )}
            </div>);
        }

        return screen;
    }
}

export default Home;
