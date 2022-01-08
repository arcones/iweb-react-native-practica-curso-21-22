import React from 'react';
import Square from './Square';
import { View } from 'react-native';
import { styles } from '../Styles';


export default function Board(props) {
  function boardClick(rowNumber, columnNumber) {
    props.appClick(rowNumber, columnNumber);
  }

  let board = props.values.map((rowValues, rowIndex) => {
    let row = rowValues.map((value, columnIndex) => {
      return (
        <Square value={value} key={rowIndex + "-" + columnIndex} rowIndex={rowIndex}
          columnIndex={columnIndex} boardClick={boardClick} />
      );
    });
    return (
      <View style={styles.tictactoeBoardRow} key={"row" + rowIndex}>
        {row}
      </View>
    );
  });

  return (
    <View style={styles.tictactoeBoard}>
      {board}
    </View>
  );

}