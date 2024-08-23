
export default function GameOver({winnerName,rematch}) {
    return (
        <div id="game-over">
            <h2>Game Over!!</h2>
            <p>{winnerName ? winnerName + ' won' : 'Has Draw' }</p>
            <p><button onClick={rematch} >Rematch</button></p>
        </div>
    )
}