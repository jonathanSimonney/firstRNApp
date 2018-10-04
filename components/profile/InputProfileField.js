import React, {Component} from 'react';
import {View, Text, TextInput} from "react-native";

export default class InputProfileField extends Component<Props> {
    render() {
        return (
            <View>
                <Text style={this.props.style}>
                    {this.props.label} :
                </Text>
                <TextInput
                    value={this.props.value}
                    onChangeText={this.props.callback}
                />
            </View>
        )
    }
}