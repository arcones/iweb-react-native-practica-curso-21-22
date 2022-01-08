import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { styles } from '../Styles';

export default function Square(props) {

  function squareClick() {
    if (props.value === "➖") {
      props.boardClick(props.rowIndex, props.columnIndex);
    }
  }

  return (
    <TouchableHighlight style={styles.tictactoeSquare} onPress={squareClick} disabled={props.value != '➖'}>
      <Text style={styles.tictactoeSquareText}>
        {props.value}
      </Text>
    </TouchableHighlight>
  );

}