'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './main.css'

interface ShipProps {
    id: string;
    size: number;
    onShipPlaced: () => void;
}

const Ship: React.FC<ShipProps> = ({ id, size }) => {
    const [isVertical, setIsVertical] = useState(false);

    const toggleOrientation = () => {
        setIsVertical(!isVertical);
    };

    const handleDragStart = (event: React.DragEvent) => {
        event.dataTransfer.setData('shipId', id); // Ustawienie id statku w danych przeciągania
        event.dataTransfer.setData('shipSize', size.toString());
        event.dataTransfer.setData('shipOrientation', isVertical ? 'vertical' : 'horizontal');
    };

    return (
        <div
            className={`ship ${isVertical ? 'vertical' : ''}`}
            onClick={toggleOrientation}
            draggable
            onDragStart={handleDragStart}
        >
            {Array(size).fill(null).map((_, i) => (
                <div key={i} className="mast"></div>
            ))}
        </div>
    );
};

export default function GameBoardAndDeployingShips() {
    const router = useRouter(); // Use useRouter for navigation
    const boardSize = 10;
    const columnLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const initialShips = [
        { id: '1', size: 4 },
        { id: '2', size: 3 },
        { id: '3', size: 3 },
        { id: '4', size: 2 },
        { id: '5', size: 2 },
        { id: '6', size: 2 },
        { id: '7', size: 1 },
        { id: '8', size: 1 },
        { id: '9', size: 1 },
        { id: '10', size: 1 }
    ];

    const emptyBoard = Array(boardSize).fill(null).map(() => Array(boardSize).fill(null));
    const [board, setBoard] = useState(emptyBoard);
    const [availableShips, setAvailableShips] = useState(initialShips);
    const [shipPositions, setShipPositions] = useState<string[]>([]);

    const [nick, setNick] = useState('Kapitan_Neptun_IX');  // Default value for nick
    const [description, setDescription] = useState('Kapitan Neptun IX, legendarny władca mórz i pan podwodnych tajemnic, steruje swoim statkiem z nieugiętą precyzją i nieprzewidywalną strategią, siejąc strach w sercach swoich przeciwników.');  // Default value for description

    const [nickOpp, setNickOpp] = useState("");
    const [gameStatusOpp, setGameStatusOpp] = useState("");

    const handleDrop = (event: React.DragEvent, rowIndex: number, columnIndex: number) => {
        event.preventDefault();
        const shipId = event.dataTransfer.getData('shipId');
        const shipSize = parseInt(event.dataTransfer.getData('shipSize'));
        const shipOrientation = event.dataTransfer.getData('shipOrientation');

        const canPlaceShip = canPlaceShipAt(board, rowIndex, columnIndex, shipSize, shipOrientation);

        if (canPlaceShip) {
            const newBoard = [...board];
            for (let i = 0; i < shipSize; i++) {
                if (shipOrientation === 'horizontal') {
                    newBoard[rowIndex][columnIndex + i] = 'ship';
                } else {
                    newBoard[rowIndex + i][columnIndex] = 'ship';
                }
            }
            setBoard(newBoard);
            setAvailableShips(availableShips.filter(ship => ship.id !== shipId));
        } else {
            alert("Statki nie mogą się stykać! Spróbuj ponownie.");
        }
    };
    const handleDragOver = (event: React.DragEvent) => {
        event.preventDefault();
    };

    const resetBoard = () => {
        setBoard(emptyBoard);
        setAvailableShips(initialShips);
        setShipPositions([]);
    };

    const canPlaceShipAt = (newBoard: string[][], rowIndex: number, columnIndex: number, shipSize: number, shipOrientation: string): boolean => {
        for (let i = 0; i < shipSize; i++) {
            if (shipOrientation === 'horizontal') {
                if (columnIndex + i >= boardSize) {
                    return false;
                }
                if (newBoard[rowIndex][columnIndex + i] === 'ship') {
                    return false;
                }
                for (let j = -1; j <= 1; j++) {
                    for (let k = -1; k <= 1; k++) {
                        if (
                            rowIndex + j >= 0 &&
                            rowIndex + j < boardSize &&
                            columnIndex + i + k >= 0 &&
                            columnIndex + i + k < boardSize &&
                            newBoard[rowIndex + j][columnIndex + i + k] === 'ship'
                        ) {
                            return false;
                        }
                    }
                }
            } else {
                if (rowIndex + i >= boardSize) {
                    return false;
                }
                if (newBoard[rowIndex + i][columnIndex] === 'ship') {
                    return false;
                }
                for (let j = -1; j <= 1; j++) {
                    for (let k = -1; k <= 1; k++) {
                        if (
                            rowIndex + i + j >= 0 &&
                            rowIndex + i + j < boardSize &&
                            columnIndex + k >= 0 &&
                            columnIndex + k < boardSize &&
                            newBoard[rowIndex + i + j][columnIndex + k] === 'ship'
                        ) {
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    };

    const randomBoard = () => {
        const newBoard = Array(boardSize).fill(null).map(() => Array(boardSize).fill(null));
        const newShips = [...initialShips];

        newShips.forEach(ship => {
            let placed = false;
            while (!placed) {
                const rowIndex = Math.floor(Math.random() * boardSize);
                const columnIndex = Math.floor(Math.random() * boardSize);
                const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';

                if (canPlaceShipAt(newBoard, rowIndex, columnIndex, ship.size, orientation)) {
                    for (let i = 0; i < ship.size; i++) {
                        if (orientation === 'horizontal') {
                            newBoard[rowIndex][columnIndex + i] = 'ship';
                        } else {
                            newBoard[rowIndex + i][columnIndex] = 'ship';
                        }
                    }
                    placed = true;
                }
            }
        });

        setBoard(newBoard);
        setAvailableShips([]);
    };

    const startGameBot = () => {
        if (nick === '') {
            alert("Nick nie może być pusty! Uzupełnij go.");
            return;
        }

        if (description === '') {
            alert("Opis nie może być pusty! Uzupełnij go.");
            return;
        }

        if (availableShips.length === 0) {
            const positions: string[] = [];
            for (let i = 0; i < boardSize; i++) {
                for (let j = 0; j < boardSize; j++) {
                    if (board[i][j] === 'ship') {
                        positions.push(`${columnLabels[j]}${i + 1}`);
                    }
                }
            }
            setShipPositions(positions);

            const dataToSend = {
                coords: positions.sort(),
                nick: nick.replace(/\s/g, ''),
                desc: description,
                wpbot: true,
                targetNick: "",
            };

            fetch('http://localhost:8080/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);

                })
                .catch((error) => {
                    console.error('Error:', error);
                });

            console.log("Pozycje statków: " + positions.sort() + "\nNick: " + nick.replace(/\s/g, '') + "\nOpis: " + description + "\nBot: " + true + "\nTargetNick: ");
            router.push('/fight');  // Navigate to /fight/player-vs-bot
        } else {
            alert("Ustaw wszystkie statki na planszy!");
        }
    };

    const waitingForOpponent = () => {
        if (nick === '') {
            alert("Nick nie może być pusty! Uzupełnij go.");
            return;
        }

        if (description === '') {
            alert("Opis nie może być pusty! Uzupełnij go.");
            return;
        }

        if (availableShips.length === 0) {
            const positions: string[] = [];
            for (let i = 0; i < boardSize; i++) {
                for (let j = 0; j < boardSize; j++) {
                    if (board[i][j] === 'ship') {
                        positions.push(`${columnLabels[j]}${i + 1}`);
                    }
                }
            }
            setShipPositions(positions);

            const dataToSend = {
                coords: positions.sort(),
                nick: nick.replace(/\s/g, ''),
                desc: description,
                wpbot: false,
                targetNick: "",
            };

            fetch('http://localhost:8080/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);

                })
                .catch((error) => {
                    console.error('Error:', error);
                });

            console.log("Pozycje statków: " + positions.sort() + "\nNick: " + nick.replace(/\s/g, '') + "\nOpis: " + description + "\nBot: " + false + "\nTargetNick: ");
            router.push('/fight');  // Navigate to /fight
        } else {
            alert("Ustaw wszystkie statki na planszy!");
        }
    };

    const backButton = () => {
        router.push('/');
    }


    const Lobby = () => {
        const [gameStatusOpp, setGameStatusOpp] = useState('');
        const [nickOpp, setNickOpp] = useState('');
        const [playersAvailable, setPlayersAvailable] = useState(false);
    
        useEffect(() => {
            const interval = setInterval(() => {
                fetch('http://localhost:8080/api/lobby')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        if (data.length > 0) {
                            setGameStatusOpp(data[0].game_status);
                            setNickOpp(data[0].nick);
                            setPlayersAvailable(true);
                        } else {
                            setPlayersAvailable(false);
                        }
                        console.log(data);
                    })
                    .catch(error => console.error('Error:', error));
            }, 1000);
    
            return () => {
                clearInterval(interval);
            };
        }, []);

        const fightWithOpponent = () => {
            if (nick === '') {
                alert("Nick nie może być pusty! Uzupełnij go.");
                return;
            }
    
            if (description === '') {
                alert("Opis nie może być pusty! Uzupełnij go.");
                return;
            }
    
            if (availableShips.length === 0) {
                const positions: string[] = [];
                for (let i = 0; i < boardSize; i++) {
                    for (let j = 0; j < boardSize; j++) {
                        if (board[i][j] === 'ship') {
                            positions.push(`${columnLabels[j]}${i + 1}`);
                        }
                    }
                }
                setShipPositions(positions);
    
                const dataToSend = {
                    coords: positions.sort(),
                    nick: nick.replace(/\s/g, ''),
                    desc: description,
                    wpbot: false,
                    targetNick: nickOpp,
                };
    
                fetch('http://localhost:8080/api/data', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataToSend),
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
    
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
    
                console.log("Pozycje statków: " + positions.sort() + "\nNick: " + nick.replace(/\s/g, '') + "\nOpis: " + description + "\nBot: " + false + "\nTargetNick:  " + nickOpp);
                router.push('/fight');  // Navigate to /fight
            } else {
                alert("Ustaw wszystkie statki na planszy!");
            }
        };
    
        return (
            <div>
                {playersAvailable ? (
                    <li><button onClick={fightWithOpponent}>{nickOpp}</button></li>
                ) : (
                    <li><button className="no-hover">Brak dostępnych graczy!</button></li>
                )}
            </div>
        );
    };
    
    return (
        <div className="gameBoard-main-container">
            <div className="about-main-container">
                <div className="your-nick">
                    <label htmlFor="nick">Twój nick</label>
                    <input id="nick" type="text" value={nick} onChange={e => setNick(e.target.value)} />
                </div>
                <div className="your-description">
                    <label htmlFor="description">Twój opis</label>
                    <textarea id="description" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                </div>
            </div>

            <div className="labels">
                <div className="label"></div>
                {columnLabels.map((label, i) => (
                    <div key={i} className="label">{label}</div>
                ))}
            </div>
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    <div className="label">{rowIndex + 1}</div>
                    {row.map((cell, columnIndex) => (
                        <div
                            key={columnIndex}
                            className={`cell ${cell === 'ship' ? 'ship-cell' : ''}`}
                            onDrop={(event) => handleDrop(event, rowIndex, columnIndex)}
                            onDragOver={handleDragOver}
                        ></div>
                    ))}
                </div>
            ))}

            <div className="shipsDeploying-main-container">
                <div className="ships">
                    {availableShips.length !== 0 && <h1>Dostępne statki</h1>}
                    <div className="ship-row">
                        {availableShips.map((ship, index) => (
                            <Ship key={index} id={ship.id} size={ship.size} onShipPlaced={() => setAvailableShips(availableShips.filter(s => s.id !== ship.id))} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="main-button-container">
                <div className="reset-button-container">
                    <button onClick={resetBoard}>Resetuj plansze</button>
                </div>
                <div className="random-button-container">
                    <button onClick={randomBoard}>Losuj ustawienie</button>
                </div>
                <div className="back-to-hub-button-container">
                    <button onClick={backButton}>Powrót</button>
                </div>


            </div>
            <h2>Wybierz przeciwnika</h2>
            <div className="opponent-main-container">
                <button onClick={startGameBot}>Bot</button>
                <button onClick={waitingForOpponent}>Oczekuj na wyzwanie</button>
                <ul className="online-player">
                    <Lobby />
                </ul>
            </div>
        </div>
    );
}