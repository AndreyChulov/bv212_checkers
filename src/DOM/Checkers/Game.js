import EnemyCemetery from "./Game/EnemyCemetery";
import Board from "./Game/Board";
import PlayerCemetery from "./Game/PlayerCemetry";
import "./Game.css"

function Game() {
    return <div className="Game">
            <EnemyCemetery/>
            <Board/>
            <PlayerCemetery/>
    </div>;
}

export default Game;