import './App.css';
import React, {useState} from 'react';

function App() {
    let random = 0;
    let empties = [];
    let wonGame = false;
    let lostGame = false;

    const [board, setBoard] = useState([
        {id: "0", sign: ""},
        {id: "1", sign: ""},
        {id: "2", sign: ""},
        {id: "3", sign: ""},
        {id: "4", sign: ""},
        {id: "5", sign: ""},
        {id: "6", sign: ""},
        {id: "7", sign: ""},
        {id: "8", sign: ""},
    ]);
    
    if ((board[0].sign === "o" && board[1].sign === "o"  && board[2].sign === "o") ||
        (board[3].sign === "o" && board[4].sign === "o"  && board[5].sign === "o") ||
        (board[6].sign === "o" && board[7].sign === "o"  && board[8].sign === "o") ||
        (board[0].sign === "o" && board[3].sign === "o"  && board[6].sign === "o") ||
        (board[1].sign === "o" && board[4].sign === "o"  && board[7].sign === "o") ||
        (board[2].sign === "o" && board[5].sign === "o"  && board[8].sign === "o") ||
        (board[0].sign === "o" && board[4].sign === "o"  && board[8].sign === "o") ||
        (board[2].sign === "o" && board[4].sign === "o"  && board[6].sign === "o")) {
            wonGame = true;       
    } else if (
        (board[0].sign === "x" && board[1].sign === "x"  && board[2].sign === "x") ||
        (board[3].sign === "x" && board[4].sign === "x"  && board[5].sign === "x") ||
        (board[6].sign === "x" && board[7].sign === "x"  && board[8].sign === "x") ||
        (board[0].sign === "x" && board[3].sign === "x"  && board[6].sign === "x") ||
        (board[1].sign === "x" && board[4].sign === "x"  && board[7].sign === "x") ||
        (board[2].sign === "x" && board[5].sign === "x"  && board[8].sign === "x") ||
        (board[0].sign === "x" && board[4].sign === "x"  && board[8].sign === "x") ||
        (board[2].sign === "x" && board[4].sign === "x"  && board[6].sign === "x")) {
            lostGame = true;
        }
    
    const clickSign = (e) => {
       
        if (wonGame === false && lostGame === false) {
            let updatedBoard = [...board];
            empties = updatedBoard.filter(item => item.sign === "");

            if (board[e].sign === "" && empties.length > 1) {
                    updatedBoard = [...board];
                    updatedBoard[e] = {...updatedBoard[e], sign: "o"};
                    empties = updatedBoard.filter(item => item.sign === "");
                    
                    if (board.some(item => item.sign === "")) {
                        random = Math.floor(Math.random() * empties.length);
                        updatedBoard[empties[random].id] = {...updatedBoard[empties[random].id], sign: "x"};
                        setBoard(updatedBoard);
                    } 
             }
            if (empties.length === 1 && board[e].sign === "") {
                updatedBoard = [...board];
                updatedBoard[e] = {...updatedBoard[e], sign: "o"};
                setBoard(updatedBoard);                         
            }  
        }
    }

    return (
        <div className="container">
            <div>
                <span className="choose">choose sign</span>
            </div>
                <div className="board">
                    <div className="box a" onClick={() => clickSign(0)}>{board[0].sign}</div>
                    <div className="box b" onClick={() => clickSign(1)}>{board[1].sign}</div>
                    <div className="box c" onClick={() => clickSign(2)}>{board[2].sign}</div>
                    <div className="box d" onClick={() => clickSign(3)}>{board[3].sign}</div>
                    <div className="box e" onClick={() => clickSign(4)}>{board[4].sign}</div>
                    <div className="box f" onClick={() => clickSign(5)}>{board[5].sign}</div>
                    <div className="box g" onClick={() => clickSign(6)}>{board[6].sign}</div>
                    <div className="box h" onClick={() => clickSign(7)}>{board[7].sign}</div>
                    <div className="box i" onClick={() => clickSign(8)}>{board[8].sign}</div>
                </div>
                <div className="winner">
                {wonGame ? <div>Score: You won</div> : lostGame ? <div>Score: You lost</div> : <div>Score:</div>}
                </div>
        </div>
    )
}
export default App;