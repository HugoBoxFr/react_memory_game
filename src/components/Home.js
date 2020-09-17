import React from 'react';
import { withRouter, Link } from "react-router-dom";
import "./home.css";

function Home() {
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
                        <Link to={'/game/6'}>
                            <button>Easy</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/game/12'}>
                            <button>Medium</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

const HomeWithRouter = withRouter(Home);
export default HomeWithRouter;