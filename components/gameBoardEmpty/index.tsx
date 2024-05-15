'use client'
import React from 'react';
import './main.css'

export default function GameBoard() {
    const boardSize = 10;
    const board = Array(boardSize).fill(null).map(() => Array(boardSize).fill(null));
    const columnLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    return (
        <div className="gameBoard-main-container">
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
        </div>
    );
}