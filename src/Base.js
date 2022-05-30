import React, { useState, useEffect } from 'react';
import { Link , useNavigate } from "react-router-dom";
//import logo from "./image/thunderParticle.png";
import logo from "./image/Thunder.svg";



export default function App(props) {

    
    // ----- Component mount --------  
    useEffect(()=>{ 
        // ---- Menu burger Animation et Display des composants burger -----------
        document.querySelector(".iconMenuBox").addEventListener('click', function() {
            // Icon
            document.querySelector(".icon-1").classList.toggle('a');
            document.querySelector(".icon-2").classList.toggle('c');
            document.querySelector(".icon-3").classList.toggle('b');

            // Menu
            if (document.querySelector(".burgerMenuBox").classList.contains('appearing')  
                || document.querySelector(".burgerMenuBox").classList.contains('disappearing') )
            {
                document.querySelector(".burgerMenuBox").classList.toggle('disappearing');
                document.querySelector(".burgerMenuBox").classList.toggle('appearing');
            }
            else
            {
                document.querySelector(".burgerMenuBox").classList.toggle('appearing');
            }
        });
    },[]); //notice the empty array here so it only happens once when the component is up

    const menuBurgerDisappearing = () => {

        // Fais disparaitre le defilement du menu burger à chaque clic sur un lien vu que c'est une SPA
        //icon
        document.querySelector(".icon-1").classList.toggle('a');
        document.querySelector(".icon-2").classList.toggle('c');
        document.querySelector(".icon-3").classList.toggle('b');
        //menu
        document.querySelector(".burgerMenuBox").classList.toggle('disappearing');
        document.querySelector(".burgerMenuBox").classList.toggle('appearing');
    };



    // ------------ JSX ------------------
    return (
      <>   
        <div id="background"></div> 

        <div className="Header">
            <Link className="leftBox" to="/">
                <img className="itemLeftBox imageHeader" src={logo}></img> 
                <span className="itemLeftBox titleHeader">
                    <div className="titleHeader-top">Richard PERRET</div>
                    <div className="hiding-titleHeader-bot">Richard PERRET</div>
                    <div className="titleHeader-bot">Richard PERRET</div>
                </span>
            </Link>

            {/* Version Mobile */}

            <div className="iconMenuBox">
                <div className="icon-1"></div>
                <div className="icon-2"></div>
                <div className="icon-3"></div>
            </div>

            <div className="burgerMenuBox">    
                <Link className="itemBugerMenuBox" to="/Projects"  onClick={menuBurgerDisappearing}>PROJECTS</Link>
                <Link className="itemBugerMenuBox" to="/Contact"  onClick={menuBurgerDisappearing}>CONTACT</Link>
            </div>

            {/* Version Desktop */}

            <div className="linksBox">
                <Link className="itemLinksBox" to="/Contact">CONTACT</Link>
                <Link className="itemLinksBox" to="/Projects">PROJECTS</Link> 
            </div>         
        </div>

        { props.isAdmin === true ? 
            <button class="logoutBubble" onClick={props.logout}>Logout</button>
        :
            null
        }   
      </>
    );
}
