'use client'
import React, { useState, useEffect } from 'react';
import './main.css'

interface NickProps {
    nick: string;
}

interface OpponentProps {
    opponent: string;
}

type BoardType = (string | null)[][];

export default function PlayerVsBot() {
    const [gameStatus, setGameStatus] = useState("");
    const [nick, setNick] = useState("");
    const [opponent, setOpponent] = useState("");
    const [oppShots, setOppShots] = useState<string[]>([]);
    const [shouldFire, setShouldFire] = useState(false);
    const [timer, setTimer] = useState(0);
    const [playerBoard, setPlayerBoard] = useState<string[]>([]); // State for player's board
    const [botBoard, setBotBoard] = useState<BoardType>(Array(10).fill(null).map(() => Array(10).fill(null))); // State for bot's board

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
        }, 1000);

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
        }, 1000);

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

            const [col, row] = [coord.charCodeAt(0) - 'A'.charCodeAt(0), parseInt(coord.substring(1)) - 1];
            if (data.result === 'hit') {
                setBotBoard(prevBoard => {
                    const newBoard = [...prevBoard];
                    newBoard[row][col] = 'H';
                    return newBoard;
                });
            } else if (data.result === 'miss') {
                setBotBoard(prevBoard => {
                    const newBoard = [...prevBoard];
                    newBoard[row][col] = 'M';
                    return newBoard;
                });
                setShouldFire(false); // It's the opponent's turn now
            } else if (data.result === 'sunk') {
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
            [0, 1], [1, 0], [0, -1], [-1, 0], // right, down, left, up
            [1, 1], [1, -1], [-1, 1], [-1, -1] // diagonals
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
                            board[newRow][newCol] = 'M'; // Mark as miss
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
            <div className='timer-container'>
                <h1 className={getTimerClass(timer)}>{formatTime(timer)}</h1>
            </div>
            <div className='boards-container'>
                <BotBoard opponent={opponent} onFire={handleFire} shouldFire={shouldFire} botBoard={botBoard} />
                <PlayerBoard nick={nick} playerBoard={playerBoard} oppShots={oppShots} shouldFire={shouldFire} />
            </div>
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

            <h3>Mapa gracza: {nick}</h3>
        </div>
    );
}

interface BotBoardProps extends OpponentProps {
    onFire: (coord: string) => void;
    shouldFire: boolean;
    botBoard: BoardType;
}

const BotBoard = ({ opponent, onFire, shouldFire, botBoard }: BotBoardProps) => {
    const boardSize = 10;
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
        </div>
    );
}
