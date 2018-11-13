import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  component: {
    backgroundColor: "blue",
    width: 300,
    height: 400
  }
});

export class TestComponent extends Component {
  render() {
    return <View style={styles.component} />;
  }
}
