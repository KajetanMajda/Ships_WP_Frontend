'use client'
import React, { useEffect, useState } from 'react';
import GameBoardAndDeployingShips from "@/components/gameBoardAndDeployingShips";
import { BrowserRouter as Router } from 'react-router-dom';

export default function Home() {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null; // or a loading indicator/spinner
  }

  return (
    <div>
      <Router>
        <GameBoardAndDeployingShips />
      </Router>
    </div>
  );
}
