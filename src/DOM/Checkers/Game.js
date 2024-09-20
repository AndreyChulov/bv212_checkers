import EnemyCemetery from "./Game/EnemyCemetery";
import Board from "./Game/Board";
import PlayerCemetery from "./Game/PlayerCemetry";

function Game() {
    return <div id="Game">
            <EnemyCemetery/>
            <Board/>
            <PlayerCemetery/>
    </div>;
}

export default Game;