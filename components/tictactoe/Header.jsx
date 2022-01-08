import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function Header(props) {
    return (
      <Text style={styles.header}>{props.text}</Text>
    );
}

const styles = StyleSheet.create({
  header: { 
    textAlign: 'center',
    fontSize: 25,
    padding: 30
  }
});
