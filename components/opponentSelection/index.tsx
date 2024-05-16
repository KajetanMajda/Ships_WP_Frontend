'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';
import './main.css';

const BotButton = () => {
    const dataToSend = {
        targetNick: "target_nick",
        wpbot: true,
    };

    useEffect(() => {
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

            });
    }, []);

    return (
        <Link href="/fight/player-vs-bot">
            <button>BOT</button>
        </Link>
    );
}

export default function OpponentSelectionModal() {
    return (
        <div className="opponent-main-container">
            <h2>Wybierz przeciwnika</h2>
            <BotButton />
            <ul>
                <li><button>P1</button></li>
                <li><button>P2</button></li>
                <li><button>P3</button></li>
                <li><button>P4</button></li>
            </ul>
        </div>
    );
};
