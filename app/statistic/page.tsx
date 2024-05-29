'use client'
import './main.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface PlayerStats {
    nick: string;
    games: number;
    wins: number;
    rank: number;
    points: number;
}

export default function Statistic() {
    const [stats, setStats] = useState<PlayerStats[]>([]);
    const router = useRouter();

    useEffect(() => {
        fetch('http://localhost:8080/api/stats')
            .then(response => response.json())
            .then(data => {
                setStats(data.stats);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    const backToHub = () => {
        router.push('/');
    }

    return (
        <div className="statistic-container">
            <div className="header-container">
                <h1>Statystyki</h1>
            </div>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="th-data th-left">Ranga</th>
                            <th className="th-data">Pseudonim</th>
                            <th className="th-data">Rozegrane pojedynki</th>
                            <th className="th-data">Wygrane</th>
                            <th className="th-data">Przegrane</th>
                            <th className="th-data th-right">Punkty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stats.map((player, index) => (
                            <tr key={index} className="tr-data">
                                <td className="td-data td-left">{player.rank}</td>
                                <td className="td-data">{player.nick}</td>
                                <td className="td-data">{player.games}</td>
                                <td className="td-data">{player.wins}</td>
                                <td className="td-data">{player.games - player.wins}</td>
                                <td className="td-data td-right">{player.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="button-back-to-hub-container">
                <button className="back-to-hub" onClick={backToHub}>Powrót</button>
            </div>
        </div>
    );
}
