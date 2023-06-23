 // Destructure it with {} because we can have multiple import variables {1, 2, 3}
import React, {Component} from "react"; 
import CardList from '../components/CardLists';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch ('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}))
        
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value}) // Updates the this values from the construct. We don't do: this.state.searchfield =...
    }

    render(){
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ? 
        <h1 className="tc">Loading</h1> :
            (
                (
                    <>
                        <div className="tc">
                            <h1 className="f-headline">CatFriends</h1>
                            <SearchBox searchChange={this.onSearchChange}/>
                            <Scroll>
                                <CardList robots={filteredRobots}/>
                            </Scroll>
                        </div>
                    </>
                )
            )
        }
    }

export default App;
