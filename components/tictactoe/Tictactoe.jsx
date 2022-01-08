import { View, Text } from 'react-native';

import React, { useState } from 'react';
import Board from './Board.jsx';
import Reset from './Reset.jsx';
import { styles } from '../Styles.jsx';
import { AppBar } from '@react-native-material/core';

export default function App() {

  const PLAYERX = "Jugador 1   🤍";
  const PLAYER0 = "Jugador 2   🟨";

  const [turn, setTurn] = useState(PLAYERX);
  const [moves, setMoves] = useState(0);
  const [values, setValues] = useState([
    ['➖', '➖', '➖'],
    ['➖', '➖', '➖'],
    ['➖', '➖', '➖']
  ]);

  function appClick(rowNumber, columnNumber) {
    let valuesCopy = JSON.parse(JSON.stringify(values));
    let newMovement = turn === PLAYERX ? '🤍' : '🟨';
    valuesCopy[rowNumber][columnNumber] = newMovement;
    setTurn(turn === PLAYERX ? PLAYER0 : PLAYERX);
    setValues(valuesCopy);
    setMoves(moves + 1);
  }

  function resetClick() {
    setTurn(PLAYERX);
    setMoves(0);
    setValues([
      ['➖', '➖', '➖'],
      ['➖', '➖', '➖'],
      ['➖', '➖', '➖']
    ]);
  }

  let text = `Turno: ${turn}`;

  return (
    <>
      <AppBar title={text}></AppBar>
      <View style={styles.tictactoeMargin}>
        <Board values={values} appClick={appClick} />
        <Text style={styles.tictactoeText}>Número de movimientos: {moves}</Text>
        <Reset resetClick={resetClick}></Reset>
      </View>
    </>
  );


}