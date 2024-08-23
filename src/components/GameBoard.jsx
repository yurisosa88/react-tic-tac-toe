
export default function GameBoard({onSelectSquare,gameBoard}) {

    //const [gameBoard,setGameBoard] = useState(initialGameBoard);

    // const handlePlayerSymbol = (rowIndex,colIndex) => {
    //     setGameBoard( (prevGameBoard) => {
    //         const updatedGameBoard = [ ...prevGameBoard.map(innerArray => [...innerArray] )]
    //             updatedGameBoard[rowIndex][colIndex] = activePlayer;
    //             onSelectSquare();
    //             return updatedGameBoard;
    //     })
    // }

    return(
            <ol id="game-board">
                { gameBoard.map( (row,rowIndex) => <li key={rowIndex}>
                    <ol>
                        { row.map( (playerSymbol,colIndex) => <li key={colIndex}>
                            <button disabled={gameBoard[rowIndex][colIndex]} onClick={ () => onSelectSquare(rowIndex,colIndex)} >{playerSymbol}</button>
                        </li> )}
                    </ol>
                </li> )}
            </ol>
    )
}