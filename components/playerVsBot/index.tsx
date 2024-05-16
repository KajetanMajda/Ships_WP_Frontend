'use client'
import React, { useState, useEffect } from 'react';
import './main.css'

interface NickProps {
    nick: string;
}

interface OpponentProps {
    opponent: string;
}

export default function PlayerVsBot() {

    const [gameStatus, setGameStatus] = useState("");
    const [nick, setNick] = useState("");
    const [opponent, setOpponent] = useState("");
    const [oppShots, setOppShots] = useState([]);
    const [shouldFire, setShouldFire] = useState(false);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            fetch('http://localhost:8080/api/gameData')
                .then(response => response.json())
                .then(data => {
                    setGameStatus(data.game_status);
                    setNick(data.nick);
                    setOpponent(data.opponent);
                    setOppShots(data.opp_shots);
                    setShouldFire(data.should_fire);
                    setTimer(data.timer);
                    console.log(data);
                })
                .catch(error => console.error('Error:', error));
        }, 2000);

        // Clean up function
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className='playerVsBot-main-container'>
            <div>
                <h1>{timer}</h1>
            </div>
            <BotBoard opponent={opponent} />
            <PlayerBoard nick={nick} />
        </div>
    );
}

const PlayerBoard = ({ nick }: NickProps) => {
    const boardSize = 10;
    const board = Array(boardSize).fill(null).map(() => Array(boardSize).fill(null));
    const columnLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    return (
        <div className="playerBoard-main-container">
            <div className="labels">
                <div className="label"></div>
                {columnLabels.map((label, i) => (
                    <div key={i} className="label">{label}</div>
                ))}
            </div>
            {board.map((row, i) => (
                <div key={i} className="row">
                    <div className="label">{i + 1}</div>
                    {row.map((cell, j) => (
                        <div key={j} className="cell" ></div>
                    ))}
                </div>
            ))}

            <h1>Plansza: {nick}</h1>
        </div>
    );
}


const BotBoard = ({ opponent }: OpponentProps) => {
    const boardSize = 10;
    const board = Array(boardSize).fill(null).map(() => Array(boardSize).fill(null));
    const columnLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    return (
        <div className="botBoard-main-container">
            <div className="labels">
                <div className="label"></div>
                {columnLabels.map((label, i) => (
                    <div key={i} className="label">{label}</div>
                ))}
            </div>
            {board.map((row, i) => (
                <div key={i} className="row">
                    <div className="label">{i + 1}</div>
                    {row.map((cell, j) => (
                        <div key={j} className="cell player-cell" ></div>
                    ))}
                </div>
            ))}
            <h1>Plansza: {opponent}</h1>
        </div>
    );
}