import React from 'react';

interface GameCardProps {
  game: {
    id: string;
    name: string;
    type?: string;
    typeDescription?: string;
  };
}

const GameCard: React.FC<GameCardProps> = ({ game }) => (
  <div className="game-card">
    <img
      src={`https://bsw-dk1.pragmaticplay.net/game_pic/square/200/${game.id}.png`}
      alt={game.name}
      className="game-img"
    />
    <div className="card-name">{game.name}</div>
  </div>
);

export default GameCard;
