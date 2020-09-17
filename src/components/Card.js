import React from 'react';
import "./card.css";


function Card(props) {

    const flipCard = (e) => {
        const elt1 = document.getElementById(e.target.id);
        elt1.classList.add('flip90');
        elt1.classList.remove('transition');
        elt1.style.cssText = "pointer-events: none; cursor: none";

        const elt2 = document.getElementById(e.target.id.split('-')[0]);
        elt2.classList.remove('flip90');
        elt2.classList.add('transition');
        elt2.style.cssText = "pointer-events: none; cursor: none";
    }


    return (
        <li>
            <img src={require(`./../assets/img/${props.card.image}`)} id={props.index} alt={props.card.name} className="flip90" onClick={(card) => { props.checkAct(props.card, card); flipCard(card)}} />
            <img src={require("./../assets/img/back_card.jpg")} id={`${props.index}-back`} alt="back card" className="transition" onClick={(card) => { props.checkAct(props.card, card); flipCard(card)}} />
        </li>
    );
}

export default Card;