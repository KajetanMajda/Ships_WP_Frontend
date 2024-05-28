'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './main.css';
import LoadingSpinner from '../LoadingSpinner';

interface NickProps {
    nick: string;
    desc: string;
}

interface OpponentProps {
    opponent: string;
    descOpp: string;
}

type BoardType = (string | null)[][];

type Coord = string;

export default function PlayerVsBot() {
    const [gameStatus, setGameStatus] = useState("");
    const [nick, setNick] = useState("");
    const [opponent, setOpponent] = useState("");
    const [oppShots, setOppShots] = useState<string[]>([]);
    const [shouldFire, setShouldFire] = useState(false);
    const [timer, setTimer] = useState(0);
    const [playerBoard, setPlayerBoard] = useState<string[]>([]);
    const [botBoard, setBotBoard] = useState<BoardType>(Array(10).fill(null).map(() => Array(10).fill(null)));
    const [desc, setDesc] = useState("");
    const [descOpp, setDescOpp] = useState("");
    const { push } = useRouter();

    const [loading, setLoading] = useState(true);
    const [missShots, setMissShots] = useState<Coord[]>([]);
    const [hitShots, setHitShots] = useState<Coord[]>([]);

    const addMissShot = (shot: Coord) => {
        setMissShots(prevShots => [...prevShots, shot]);
    };

    const addHitShot = (shot: Coord) => {
        setHitShots(prevShots => [...prevShots, shot]);
    };

    const shotsFired = missShots.length + hitShots.length;
    const accuracy = Math.round((hitShots.length / shotsFired) * 100);



    useEffect(() => {

        if (gameStatus === "abandoned") {
            alert("Rezygnacja z gry. Powrót do lobby.");
            return push('/');
        }

        if (gameStatus === "ended") {
            if (playerBoard.length === 0) {
                alert(`Zatopiłeś wszystkie statki! Wracasz do domu! Wygrałeś!\n Strzały oddane: ${shotsFired}\nPudła: ${missShots.length}\nCelność: ${accuracy} %\nPowrót do lobby.`)
                return push('/');
            }
            else {
                alert(`Nie udało się zatopić wrogich statków. Idziesz na dno z honorem... Przegrana!\nStrzały oddane: ${shotsFired}\nPudła: ${missShots.length}\nCelność: ${accuracy} %\nPowrót do lobby.`)
                return push('/');
            }
        }

        if (gameStatus == "game_in_progress") {
            setLoading(false);
        }



        const interval = setInterval(() => {
            fetch('http://localhost:8080/api/gameData')
                .then(response => response.json())
                .then(data => {
                    setGameStatus(data.game_status);
                    setNick(data.nick);
                    setOpponent(data.opponent);
                    setOppShots(data.opp_shots || []);
                    setShouldFire(data.should_fire);
                    setTimer(data.timer);
                    console.log(data);
                })
                .catch(error => console.error('Error:', error));
        }, 1000);

        const boardInterval = setInterval(() => {
            fetch('http://localhost:8080/api/boardData')
                .then(response => response.json())
                .then(data => {
                    if (data.board && data.board.length > 0) {
                        setPlayerBoard(data.board);
                        clearInterval(boardInterval);
                        console.log(data);
                    }
                })
                .catch(error => console.error('Error:', error));
        }, 1000);

        const descInterval = setInterval(() => {
            fetch('http://localhost:8080/api/descData')
                .then(response => response.json())
                .then(data => {
                    setDesc(data.desc);
                    setDescOpp(data.opp_desc);
                    console.log(data);
                })
                .catch(error => console.error('Error:', error));
        }, 1000);

        return () => {
            clearInterval(interval);
            clearInterval(boardInterval);
            clearInterval(descInterval);
        };
    }, [gameStatus]);

    const handleFire = async (coord: string) => {
        console.log(`Kliknąłeś na:  ${coord}`);
        if (!shouldFire) {
            alert("To nie jest twoja kolej!");
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

            const [col, row] = [coord.charCodeAt(0) - 'A'.charCodeAt(0), parseInt(coord.substring(1)) - 1];
            if (data.result === 'hit') {
                addHitShot(coord);
                setBotBoard(prevBoard => {
                    const newBoard = [...prevBoard];
                    newBoard[row][col] = 'H';
                    return newBoard;
                });
            } else if (data.result === 'miss') {
                addMissShot(coord);
                console.log(addMissShot);
                setBotBoard(prevBoard => {
                    const newBoard = [...prevBoard];
                    newBoard[row][col] = 'M';
                    return newBoard;
                });
                setShouldFire(false);
            } else if (data.result === 'sunk') {
                addHitShot(coord);
                setBotBoard(prevBoard => {
                    const newBoard = [...prevBoard];
                    newBoard[row][col] = 'S';
                    markSunkShip(newBoard, row, col);
                    markSurroundingCells(newBoard, row, col);
                    return newBoard;
                });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const markSunkShip = (board: BoardType, row: number, col: number) => {
        const directions: [number, number][] = [
            [0, 1], [1, 0], [0, -1], [-1, 0],
            [1, 1], [1, -1], [-1, 1], [-1, -1]
        ];

        const isValidCell = (r: number, c: number) => r >= 0 && r < board.length && c >= 0 && c < board[0].length;

        const queue: [number, number][] = [[row, col]];

        while (queue.length > 0) {
            const [currentRow, currentCol] = queue.shift() as [number, number];

            directions.forEach(([dx, dy]) => {
                const newRow = currentRow + dx;
                const newCol = currentCol + dy;

                if (isValidCell(newRow, newCol) && board[newRow][newCol] === 'H') {
                    board[newRow][newCol] = 'S';
                    queue.push([newRow, newCol]);
                }
            });
        }
    };

    const markSurroundingCells = (board: BoardType, row: number, col: number) => {
        const directions: [number, number][] = [
            [-1, -1], [-1, 0], [-1, 1],
            [0, -1], [0, 1],
            [1, -1], [1, 0], [1, 1]
        ];

        const isValidCell = (r: number, c: number) => r >= 0 && r < board.length && c >= 0 && c < board[0].length;

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === 'S') {
                    directions.forEach(([dx, dy]) => {
                        const newRow = i + dx;
                        const newCol = j + dy;
                        if (isValidCell(newRow, newCol) && !board[newRow][newCol]) {
                            board[newRow][newCol] = 'M';
                        }
                    });
                }
            }
        }
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    function getTimerClass(timer: number) {
        if (timer <= 10) {
            return "red";
        } else if (timer <= 30) {
            return "yellow";
        } else if (timer <= 60) {
            return "green";
        } else {
            return "";
        }
    }

    return (
        <div className='playerVsBot-main-container'>
            {loading && <LoadingSpinner />}
            <div className="abonded-button-container">
                <button className="TEST">Poddaj się</button>
            </div>

            <div className='timer-container'>
                <h1 className={getTimerClass(timer)}>{formatTime(timer)}</h1>
            </div>
            <div className='boards-container'>
                <PlayerBoard nick={nick} desc={desc} playerBoard={playerBoard} oppShots={oppShots} shouldFire={shouldFire} />
                <div className={shouldFire ? 'triangle-right' : 'triangle-left'}></div>
                <BotBoard opponent={opponent} descOpp={descOpp} onFire={handleFire} shouldFire={shouldFire} botBoard={botBoard} />
            </div>
        </div>
    );
}

interface PlayerBoardProps extends NickProps {
    playerBoard: string[];
    oppShots: string[];
    shouldFire: boolean;
}

const PlayerBoard = ({ nick, desc, playerBoard, oppShots, shouldFire }: PlayerBoardProps) => {
    const boardSize = 10;
    const board = Array(boardSize).fill(null).map(() => Array(boardSize).fill(null));
    const columnLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    if (playerBoard) {
        playerBoard.forEach(coord => {
            const col = coord.charCodeAt(0) - 'A'.charCodeAt(0);
            const row = parseInt(coord.substring(1), 10) - 1;
            if (col >= 0 && col < boardSize && row >= 0 && row < boardSize) {
                board[row][col] = 'S';
            }
        });
    }

    if (oppShots) {
        oppShots.forEach(coord => {
            const col = coord.charCodeAt(0) - 'A'.charCodeAt(0);
            const row = parseInt(coord.substring(1), 10) - 1;
            if (col >= 0 && col < boardSize && row >= 0 && row < boardSize) {
                if (board[row][col] === 'S') {
                    board[row][col] = 'H';
                } else {
                    board[row][col] = 'M';
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

            <h3>Mapa gracza: {nick}</h3>
            <h5 className='desc'>{desc}</h5>
        </div>
    );
}

interface BotBoardProps extends OpponentProps {
    onFire: (coord: string) => void;
    shouldFire: boolean;
    botBoard: BoardType;
}

const BotBoard = ({ opponent, descOpp, onFire, shouldFire, botBoard }: BotBoardProps) => {
    const boardSize = 10;
    const columnLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    const coordMe = (rowIndex: number, columnIndex: number) => {
        const rowLabel = rowIndex + 1;
        const columnLabel = columnLabels[columnIndex];
        const coord = `${columnLabel}${rowLabel}`;
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
            {botBoard.map((row, i) => (
                <div key={i} className="row">
                    <div className="label">{i + 1}</div>
                    {row.map((cell, j) => (
                        <div
                            key={j}
                            className={`cell ${cell === 'H' ? 'hit-cell' : cell === 'M' ? 'miss-cell' : cell === 'S' ? 'sunk-cell' : ''} ${shouldFire ? 'player-cell' : ''}`}
                            onClick={() => shouldFire && coordMe(i, j)}
                        ></div>
                    ))}
                </div>
            ))}
            <h3>Mapa gracza: {opponent}</h3>
            <h5 className='desc'>{descOpp}</h5>
        </div>
    );
}