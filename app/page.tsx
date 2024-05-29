'use client'
import './main.css';
import { useRouter } from 'next/navigation';

export default function App() {
    const router = useRouter();

    const startGame = () => {
        router.push('/home');
    }

    const statistic = () => {
        router.push('/statistic');
    }

    return (
        <div className="main-menu-container">
            <div className="home-main-button-container">
                <button className="normal-game" onClick={startGame}>Zaczynamy</button>
                <button className="statistic" onClick={statistic}>Statystyki</button>
            </div>
        </div>
    );
}