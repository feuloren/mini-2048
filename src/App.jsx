import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function mergeLeft(board) {
    let newBoard = [...board];

    return newBoard;
}

function mergeRight(board) {
    let newBoard = [...board];

    return newBoard;
}

function newRandom() {
    return Math.floor(Math.random() * 2) + 1;
}

function App() {
    const [board, setBoard] = useState(() => ([newRandom(), newRandom(), newRandom(), 0, 0, 0]));

    useEffect(() => {
        const handler = (event) => {
            if (left) {
                setBoard(board => mergeLeft(board));
                event.preventDefault();
            } else if (right) {
                setBoard(board => mergeRight(board));
                event.preventDefault();
            }
        };

        window.addEventListener('keydown', handler);

        return () => {
            window.removeEventListener('keydown', handler);
        }
    }, []);
    

    return (
        <div style={{display: 'flex'}}>
            { board.map((value, index) => (<div style={{padding: '2em', borderRadius: '5px', border: '1px solid white', margin: '1em'}} key={index}>{ value > 0 ? value : "" }</div>)) }
        </div>
    )
}

// value -> colors
// 0: transparent
// 1: #FFD700
// 2: #FFA500
// 4: #FF7F50
// 8: #FF6347
// 16: #FF0000

export default App;
