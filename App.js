import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { WebView } from "react-native-webview"
import { StatusBar } from 'expo-status-bar';

export default class Maps extends Component {
  state = {
    WEBVIEW_REF: "weViewRed",
    loading: false
  };
  goBack = () => {
    this.refs[this.state.WEBVIEW_REF].goBack();
  };
  goForward = () => {
    this.refs[this.state.WEBVIEW_REF].goForward();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: "https://htooeainth.in" }}
          ref={this.state.WEBVIEW_REF}
          style={{ marginTop: 30, backgroundColor : "dark" }}
          onLoadStart={() => this.setState({ loading: true })}
          onLoadEnd={() => this.setState({ loading: false })}
        />
        <StatusBar style="dark" />
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => this.goBack()}
            disabled={this.state.canGoBack}
          >
            <Text style={styles.icon}>⤺</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => this.goForward()}>
            <Text style={styles.icon}>⤻</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    color: "#fff",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center"
  },
  footer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#000000"
  }
});