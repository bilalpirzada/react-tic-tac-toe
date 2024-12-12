const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];



export default function GameBoard(){

const board=  <ol id="game-board">
{initialGameBoard.map((row,rowIndex)=>(
   <li key={rowIndex}>
     <ol>
       {row.map((playerSymbol,colIndex)=>(
         <li key={colIndex}>
           <button>{playerSymbol}</button>
         </li>
       ))}
     </ol>
   </li>
 ))} 

</ol>;


  return (<>{board}</>)
}