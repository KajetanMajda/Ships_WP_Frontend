'use client'
import React from 'react';
import Gameplay from "@/components/fight";
import './main.css'

export default function GameplayByPlayer() {
    return (
        <div className='playerVsBot-main-main-container'>
            <Gameplay />
        </div>
    );
}