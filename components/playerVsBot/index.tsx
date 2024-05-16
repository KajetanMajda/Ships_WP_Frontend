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
    const [oppShots, setOppShots] = useState<string[]>([]);
    const [shouldFire, setShouldFire] = useState(false);
    const [timer, setTimer] = useState(0);
    const [playerBoard, setPlayerBoard] = useState<string[]>([]); // State for player's board

    useEffect(() => {
        const interval = setInterval(() => {
            fetch('http://localhost:8080/api/gameData')
                .then(response => response.json())
                .then(data => {
                    setGameStatus(data.game_status);
                    setNick(data.nick);
                    setOpponent(data.opponent);
                    setOppShots(data.opp_shots || []); // Ensure oppShots is an array
                    setShouldFire(data.should_fire);
                    setTimer(data.timer);
                    console.log(data);
                })
                .catch(error => console.error('Error:', error));
        }, 2000);

        // Fetch player's board data every 2 seconds until it's not empty
        const boardInterval = setInterval(() => {
            fetch('http://localhost:8080/api/boardData')
                .then(response => response.json())
                .then(data => {
                    if (data.board && data.board.length > 0) {
                        setPlayerBoard(data.board);
                        clearInterval(boardInterval); // Stop the interval when data is received
                        console.log(data);
                    }
                })
                .catch(error => console.error('Error:', error));
        }, 2000);

        // Clean up function
        return () => {
            clearInterval(interval);
            clearInterval(boardInterval);
        };
    }, []);

    const handleFire = async (coord: string) => {
        console.log(`Clicked on ${coord}`);
        if (!shouldFire) {
            alert("It's not your turn to fire!");
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/fire', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ coord })
            });
            const data = await response.json();
            console.log(data);

            if (data.result === 'hit') {
                alert('Hit!');
            } else {
                alert('Miss!');
                setShouldFire(false); // It's the opponent's turn now
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='playerVsBot-main-container'>
            <div>
                <h1>{timer}</h1>
            </div>
            <BotBoard opponent={opponent} onFire={handleFire} shouldFire={shouldFire} />
            <PlayerBoard nick={nick} playerBoard={playerBoard} oppShots={oppShots} shouldFire={shouldFire} />
        </div>
    );
}

interface PlayerBoardProps extends NickProps {
    playerBoard: string[];
    oppShots: string[];
    shouldFire: boolean;
}

const PlayerBoard = ({ nick, playerBoard, oppShots, shouldFire }: PlayerBoardProps) => {
    const boardSize = 10;
    const board = Array(boardSize).fill(null).map(() => Array(boardSize).fill(null));
    const columnLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    // Convert coordinates to board indices if playerBoard is not null or undefined
    if (playerBoard) {
        playerBoard.forEach(coord => {
            const col = coord.charCodeAt(0) - 'A'.charCodeAt(0);
            const row = parseInt(coord.substring(1), 10) - 1;
            if (col >= 0 && col < boardSize && row >= 0 && row < boardSize) {
                board[row][col] = 'S'; // 'S' for Ship
            }
        });
    }

    // Mark opponent shots on the board if oppShots is not null or undefined
    if (oppShots) {
        oppShots.forEach(coord => {
            const col = coord.charCodeAt(0) - 'A'.charCodeAt(0);
            const row = parseInt(coord.substring(1), 10) - 1;
            if (col >= 0 && col < boardSize && row >= 0 && row < boardSize) {
                if (board[row][col] === 'S') {
                    board[row][col] = 'H'; // 'H' for Hit
                } else {
                    board[row][col] = 'M'; // 'M' for Miss
                }
            }
        });
    }

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
                        <div
                            key={j}
                            className={`cell ${cell === 'S' ? 'ship-cell' : cell === 'H' ? 'hit-cell' : cell === 'M' ? 'miss-cell' : ''}`}
                        ></div>
                    ))}
                </div>
            ))}

            <h1>Plansza: {nick}</h1>
        </div>
    );
}

interface BotBoardProps extends OpponentProps {
    onFire: (coord: string) => void;
    shouldFire: boolean;
}

const BotBoard = ({ opponent, onFire, shouldFire }: BotBoardProps) => {
    const boardSize = 10;
    const board = Array(boardSize).fill(null).map(() => Array(boardSize).fill(null));
    const columnLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    const coordMe = (rowIndex: number, columnIndex: number) => {
        const rowLabel = rowIndex + 1;
        const columnLabel = columnLabels[columnIndex];
        const coord = `${columnLabel}${rowLabel}`;
        // console.log(coord);
        onFire(coord);
    }

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
                        <div
                            key={j}
                            className={`cell ${shouldFire ? 'player-cell' : ''}`}
                            onClick={() => shouldFire && coordMe(i, j)}
                        ></div>
                    ))}
                </div>
            ))}
            <h1>Plansza: {opponent}</h1>
        </div>
    );
}
