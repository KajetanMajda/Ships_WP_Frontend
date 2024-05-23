'use client'
import './main.css';

export default function App() {

    return (
        <div className="main-menu-container">
            <div className="main-button-container">
                {/* <button className="how-to-play">Jak grać?</button> */}
                <button className="normal-game">Zaczynamy!</button>
                <button className="statistic">Statystyki</button>
            </div>
        </div>
    );
}