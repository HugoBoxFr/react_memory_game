import React from 'react';
import { withRouter, Link } from "react-router-dom";
import "./home.css";

function Home(props) {
    return (
        <div className="Welcome" id="wlc-txt">
            <div>
                <h2>Welcome to</h2>
                <h1>Saint Seiya - The Memory Game</h1>
            </div>

            <div>
                <p>Choose a mode :</p>
                <ul>
                    <li>
                        <Link to={'/game'}>
                            <button value="6" onClick={(e) => props.difficulty(e.target.value)}>Easy</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/game'}>
                            <button value="9" onClick={(e) => props.difficulty(e.target.value)}>Medium</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

const HomeWithRouter = withRouter(Home);
export default HomeWithRouter;