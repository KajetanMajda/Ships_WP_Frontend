import React from 'react';
import './main.css'; // Importuj odpowiednie style
import { useRouter } from 'next/navigation';

const LoadingSpinner = () => {
    const router = useRouter();

    const handleBackToMenu = () => {
        router.push('/');
    };

    return (
        <div className="loading-spinner">
            {/* <button onClick ={handleBackToMenu} className="normal-game">Wroc do Menu</button> */}
            <div className="spinner"></div>
            <p>Ładowanie...</p>
        </div>
    );
};

export default LoadingSpinner;
