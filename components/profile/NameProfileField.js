import React, {Component} from 'react';
import {Text} from "react-native";

export default class NameProfileField extends Component<Props> {
    render() {
        return (
            <Text style={this.props.style}>{this.props.label}: {this.props.value}</Text>
        )
    }
}