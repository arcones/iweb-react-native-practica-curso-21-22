import { View, Text } from 'react-native';

import React, { useState } from 'react';
import Board from './Board.jsx';
import Reset from './Reset.jsx';
import { styles } from '../Styles.jsx';
import { AppBar } from '@react-native-material/core';

export default function App() {

  const PLAYERX = "Jugador 1   π€";
  const PLAYER0 = "Jugador 2   π¨";

  const [turn, setTurn] = useState(PLAYERX);
  const [moves, setMoves] = useState(0);
  const [values, setValues] = useState([
    ['β', 'β', 'β'],
    ['β', 'β', 'β'],
    ['β', 'β', 'β']
  ]);

  function appClick(rowNumber, columnNumber) {
    let valuesCopy = JSON.parse(JSON.stringify(values));
    let newMovement = turn === PLAYERX ? 'π€' : 'π¨';
    valuesCopy[rowNumber][columnNumber] = newMovement;
    setTurn(turn === PLAYERX ? PLAYER0 : PLAYERX);
    setValues(valuesCopy);
    setMoves(moves + 1);
  }

  function resetClick() {
    setTurn(PLAYERX);
    setMoves(0);
    setValues([
      ['β', 'β', 'β'],
      ['β', 'β', 'β'],
      ['β', 'β', 'β']
    ]);
  }

  let text = `Turno: ${turn}`;

  return (
    <>
      <AppBar title={text}></AppBar>
      <View style={styles.tictactoeMargin}>
        <Board values={values} appClick={appClick} />
        <Text style={styles.tictactoeText}>NΓΊmero de movimientos: {moves}</Text>
        <Reset resetClick={resetClick}></Reset>
      </View>
    </>
  );


}