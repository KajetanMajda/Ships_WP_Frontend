'use client'
import React from 'react';

export default function About() {
    return (
        <div className="about-main-container">
            <div className="your-nick">
                <label htmlFor="nick">Twój nick</label>
                <input id="nick" type="text" />
            </div>
            <div className="your-description">
                <label htmlFor="description">Twój opis</label>
                <textarea id="description"></textarea>
            </div>

        </div>
    );
}