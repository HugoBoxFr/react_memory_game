import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import * as Schema from "./../schema";
import Card from "./Card";
import "./table.css";

let matchId = [];
let matchIndex = [];

function Table() {

    const match = useRouteMatch();
    const mode = match.params.id;
    const [cards, setCards] = useState([]);
    const [points, setPoints] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (mode === "6") {
            const screen = document.getElementById("display");
            screen.style.cssText = "width: 900px;";
        }

        const fetchData = () => {
            let saintsList = Schema.saints;
            let selectedSaints = [];

            let it = 0;

            while (it !== parseInt(mode)) {
                let rand = saintsList[Math.floor(Math.random() * saintsList.length)];
                if (!selectedSaints.includes(rand)) {
                    selectedSaints.push(rand, rand);
                    it++;
                }
            }

            shuffle(selectedSaints);
            setCards(selectedSaints);
        }
        fetchData();
    }, [setCards]);


    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
      
        while (0 !== currentIndex) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
    }

    const callback = (card, e) => {
        matchId.push(card);
        matchIndex.push(e.target.id);

        if (matchId.length === 2) {
            setCount(count + 1);
            let cardsCollection = document.getElementsByTagName('li');
            let allCards = [...cardsCollection];
            allCards.map(elt => elt.style.cssText = "pointer-events: none; cursor: none" );

            
            if (matchId[0] === matchId[1]) {
                setPoints(points + 1);

                setTimeout(() => {
                    allCards.map(elt => elt.style.cssText = "pointer-events: auto; cursor: pointer" );
                }, 2000);
                
                matchId = [];
                matchIndex = [];

            } else if (matchId[0] !== matchId[1]) {
                setTimeout(() => {
                    const elt1_back = document.getElementById(matchIndex[0]);
                    elt1_back.classList.remove('flip90');
                    elt1_back.classList.add('transition');
                    elt1_back.style.cssText = "pointer-events: auto; cursor: pointer";
        
                    const elt2_back = document.getElementById(matchIndex[1]);
                    elt2_back.classList.remove('flip90');
                    elt2_back.classList.add('transition');
                    elt2_back.style.cssText = "pointer-events: auto; cursor: pointer";
    
                    const elt1_front = document.getElementById(matchIndex[0].split('-')[0]);
                    elt1_front.classList.remove('transition');
                    elt1_front.classList.add('flip90');
                    elt1_front.style.cssText = "pointer-events: auto; cursor: pointer";
        
                    const elt2_front = document.getElementById(matchIndex[1].split('-')[0]);
                    elt2_front.classList.remove('transition');
                    elt2_front.classList.add('flip90');
                    elt2_front.style.cssText = "pointer-events: auto; cursor: pointer";

                    allCards.map(elt => elt.style.cssText = "pointer-events: auto; cursor: pointer" );

                    matchId = [];
                    matchIndex = [];
                }, 1500);
            }
        }
    }

    const test = () => {
        console.log('ok')
    }


    if (parseInt(points) === parseInt(mode)) {
        setTimeout(() => {
            const page = document.getElementById("app");
            
            let congrats = document.createElement('div');
            congrats.id = 'block';
            congrats.className = 'block';
            congrats.innerHTML = `<p>Congratulations !!! The Sanctuary needs a knight like you !<br>Another game ?</p> 
                                    <div><button onClick={document.location.reload()}>For Athena !!!</button>
                                    <button onClick={document.location='/'}>Go back home</button></div>`;
                                    
            if (!document.getElementById('block')) {
                page.style.filter = "grayscale(.8)";
                document.getElementById('root').appendChild(congrats);
            }

            if (document.getElementById('block')) {
                window.addEventListener("click", function(event) {
                    if (event.target.id === "game_table" || event.target.id === "nav") {
                        if (document.getElementById('block')) {
                            document.getElementById('root').removeChild(congrats);
                            page.style.filter = "grayscale(0)";
                        }
                    }
                });
            }
        }, 2000);
    }

    
    return (
        <div className="Game-Table" id="game_table">
            <div className="Score-bar">
                <h3>Score : {points} - { count > 1 ? "Turns" : "Turn"} : {count}</h3>
            </div>

            <div className="SaintsList" id="display">

                <ul>
                    { 
                        cards.map((card, index) => {
                            return <Card card={card} key={index} index={index} checkAct={callback} />
                        })
                    }
                </ul>
                
            </div>
        </div>
    );
}

export default Table;