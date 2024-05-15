'use client'
import React, { useState } from 'react';
import './main.css'

interface ShipProps {
    size: number;
}

type ShipsState = {
    [key: string]: number;
    4: number;
    3: number;
    2: number;
    1: number;
};

const Ship: React.FC<ShipProps> = ({ size }) => {
    const [isVertical, setIsVertical] = useState(false);

    const toggleOrientation = () => {
        setIsVertical(!isVertical);
    };

    const handleDragStart = (event: React.DragEvent) => {
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

export default function ShipsDeploying() {
    const [ships, setShips] = useState<ShipsState>({
        4: 1,
        3: 2,
        2: 3,
        1: 4
    });

    const handleDrop = (event: React.DragEvent) => {
        event.preventDefault();
        const shipSize = event.dataTransfer.getData('shipSize');
        setShips(prevShips => ({
            ...prevShips,
            [shipSize]: prevShips[shipSize] - 1
        }));
    };

    const handleDragOver = (event: React.DragEvent) => {
        event.preventDefault();
    };

    return (
        <div className="shipsDeploying-main-container" onDrop={handleDrop} onDragOver={handleDragOver}>    
            <div className="ships">
                <h2>Dostępne statki</h2>
                <div className="ship-row">
                    {Array(ships[4]).fill(<Ship size={4} />)}
                    {Array(ships[3]).fill(<Ship size={3} />)}
                    {Array(ships[2]).fill(<Ship size={2} />)}
                    {Array(ships[1]).fill(<Ship size={1} />)}
                </div>
            </div>
        </div>
    );
}