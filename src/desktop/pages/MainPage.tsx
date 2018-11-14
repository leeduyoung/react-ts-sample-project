import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;
export class MainPage extends React.Component<MainPage.IProps>
{
	public render(): JSX.Element
	{
		return (
            <div>
                desktop main page

                <Router>
                    <div>
                    <nav>
                        <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about/">About</Link>
                        </li>
                        <li>
                            <Link to="/users/">Users</Link>
                        </li>
                        </ul>
                    </nav>

                    <Route path="/" exact component={Index} />
                    <Route path="/about/" component={About} />
                    <Route path="/users/" component={Users} />
                    </div>
                </Router>
            </div>
        )
	}
}

export namespace MainPage
{
    export interface IProps
    {

    }
}