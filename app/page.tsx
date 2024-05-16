'use client'
import React from 'react';
import GameBoardAndDeployingShips from "@/components/gameBoardAndDeployingShips";
import { BrowserRouter as Router } from 'react-router-dom';



export default function Home() {
  return (
    <div>
      <Router>
        <GameBoardAndDeployingShips />
      </Router>
    </div>

  );
}