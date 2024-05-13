'use client'
import React, { useState } from 'react';
import './main.css'

interface ShipProps {
    size: number;
}

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
    const handleDrop = (event: React.DragEvent) => {
        event.preventDefault();
        const shipSize = event.dataTransfer.getData('shipSize');
        const shipOrientation = event.dataTransfer.getData('shipOrientation');
        console.log(`Dropped ship of size ${shipSize} with orientation ${shipOrientation}`);
    };

    const handleDragOver = (event: React.DragEvent) => {
        event.preventDefault();
    };

    return (
        <div className="shipsDeploying-main-container" onDrop={handleDrop} onDragOver={handleDragOver}>    
            <div className="ships">
                <h2>Statki</h2>
                <div className="ship-row">
                    <Ship size={4} />
                    <Ship size={3} />
                    <Ship size={3} />
                    <Ship size={2} />
                    <Ship size={2} />
                    <Ship size={2} />
                    <Ship size={1} />
                    <Ship size={1} />
                    <Ship size={1} />
                    <Ship size={1} />
                </div>
            </div>
        </div>
    );
}