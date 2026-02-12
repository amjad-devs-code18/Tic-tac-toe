import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const BOARD_SIZE = width - 40; // Board width with padding
const CELL_SIZE = BOARD_SIZE / 3; // Each cell 1/3 of board

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (board) => {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for (let [a,b,c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return board.includes(null) ? null : 'Draw';
  };

  const handlePress = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'X' : 'O';
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
    const gameResult = checkWinner(newBoard);
    if (gameResult) setWinner(gameResult);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setIsXTurn(true);
  };

  // Split board into 3 rows
  const rows = [
    board.slice(0,3),
    board.slice(3,6),
    board.slice(6,9),
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amjad's Tic Tac Toe</Text>
      {winner && (
        <Text style={styles.winner}>
          {winner === 'Draw' ? "It's a Draw!" : `${winner} Wins!`}
        </Text>
      )}

      <View style={styles.board}>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, colIndex) => {
              const index = rowIndex*3 + colIndex;
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.cell}
                  onPress={() => handlePress(index)}
                >
                  <Text style={styles.cellText}>{cell}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
        <Text style={styles.resetText}>Reset Game</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fefefe',
    padding:20,
  },
  title: {
    fontSize:28,
    fontWeight:'bold',
    marginBottom:20,
  },
  winner: {
    fontSize:22,
    color:'green',
    fontWeight:'bold',
    marginBottom:15,
  },
  board: {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  },
  row: {
    flexDirection:'row',
    flex:1,
  },
  cell: {
    flex:1,
    margin:2,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    borderWidth:2,
    borderColor:'#333',
    borderRadius:10,
  },
  cellText: {
    fontSize:50,
    fontWeight:'bold',
    color:'#333',
  },
  resetButton: {
    marginTop:20,
    padding:12,
    backgroundColor:'#2196F3',
    borderRadius:8,
  },
  resetText: {
    color:'#fff',
    fontSize:18,
    fontWeight:'bold',
  },
});
