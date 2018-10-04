/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, TextInput, View, Image, Button} from 'react-native';
import ProfileField from "./components/profile/ProfileField"

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    displayVars = this.displayVars.bind(this);

  constructor(props){
    super(props);
    this.name = "toto";
    this.darkVadorName = "Anakin";
    this.state = {age: '17', note: '7'};
  }

    displayVars(){
        Alert.alert('your age, your name, your dark vador name, your grade', this.state.age + ", " + this.name + ", " + this.darkVadorName + ", " + this.state.note)
    }

    handleAgeInput = (newAge) => {
      this.setState({age: newAge})
    };

    handleNoteInput = (newNote) => {
      this.setState({note: newNote})
    };


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Photo : </Text>
        <ProfileField source={{uri: 'https://i2.wp.com/www.team-ever.com/wp-content/uploads/2015/08/css3-logo-png.png?fit=564%2C376&ssl=1'}}
        />
        <ProfileField style={styles.instructions} label={"name"} value={this.name}/>
        <ProfileField
            style={styles.instructions}
            label={"Age"}
            value={this.state.age}
            callback={this.handleAgeInput}
        />
          <ProfileField
              style={styles.instructions}
              label={"Note"}
              value={this.state.note}
              callback={this.handleNoteInput}
          />
          <Button
              title="Give me my data?"
              accessibilityLabel="display the age"
              onPress={this.displayVars}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
