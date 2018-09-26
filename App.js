/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, TextInput, View, Image, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    displayAge = this.displayAge.bind(this);

  constructor(props){
    super(props);
    this.state = {age: '17'};
  }

    static displayHelloWorld(){
      Alert.alert('hello world', "Hello world")
    }

    displayAge(){
        Alert.alert('your age', this.state.age)
    }

    handleAgeInput = (newAge) => {
      this.setState({age: newAge})
    };


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Photo : </Text>
        <Image style={{height: 50, width: 50}} source={{uri: 'https://i2.wp.com/www.team-ever.com/wp-content/uploads/2015/08/css3-logo-png.png?fit=564%2C376&ssl=1'}}
        />
        <Text style={styles.instructions}>Name: Jonathan</Text>
        <Text style={styles.instructions}>Age : </Text>
        <TextInput
            value={this.state.age}
            onChangeText={this.handleAgeInput}
        />
        <Button
            title="begin"
            accessibilityLabel="display a text"
            onPress={App.displayHelloWorld}
        />
          <Button
              title="How old am I?"
              accessibilityLabel="display the age"
              onPress={this.displayAge}
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
