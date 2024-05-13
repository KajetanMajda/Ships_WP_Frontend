'use client'
import React, { useState } from 'react';
import './main.css'

export default function GameBoard() {
    const boardSize = 10;
    const columnLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    const emptyBoard = Array(boardSize).fill(null).map(() => Array(boardSize).fill(null));
    const [board, setBoard] = useState(emptyBoard);

    const handleDrop = (event: React.DragEvent, rowIndex: number, columnIndex: number) => {
        event.preventDefault();
        const shipSize = parseInt(event.dataTransfer.getData('shipSize'));
        const shipOrientation = event.dataTransfer.getData('shipOrientation');

        // Update the board state to place the ship
        const newBoard = [...board];
        for (let i = 0; i < shipSize; i++) {
            if (shipOrientation === 'horizontal') {
                newBoard[rowIndex][columnIndex + i] = 'ship';
            } else {
                newBoard[rowIndex + i][columnIndex] = 'ship';
            }
        }
        setBoard(newBoard);
    };

    const handleDragOver = (event: React.DragEvent) => {
        event.preventDefault();
    };

    return (
        <div className="gameBoard-main-container">
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
        </div>
    );
}

// const coordMe = (rowIndex: number, columnIndex: number) => {
        //     const rowLabel = rowIndex + 1;
        //     const columnLabel = columnLabels[columnIndex];
        //     console.log(`${columnLabel}${rowLabel}`);
        // }


        // <div key={j} className="cell" onClick={() => coordMe(i,j)} ></div>