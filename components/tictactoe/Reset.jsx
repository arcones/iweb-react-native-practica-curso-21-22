import { Button } from '@react-native-material/core';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { PINK } from '../Styles';

export default function Reset(props) {
  function click() {
    props.resetClick();
  }

  return(
    <Button title="Reiniciar" color={PINK} tintColor="white" onPress={click} trailing={props => <Ionicons name="color-wand-outline" {...props} />} />
  );
    
}