'use client'
import React, { useState } from 'react';
import GameBoard from "@/components/gameBoardAndDeployingShips";
import About from "@/components/about";
import ShipsDeploying from "@/components/shipsDeploying";



export default function Home() {
  return (
    <div>
      {/* <h1>Kajetan Jest kozak</h1> */}
      <GameBoard />
      {/* <About /> */}
      {/* <ShipsDeploying /> */}

    </div>
  );
}