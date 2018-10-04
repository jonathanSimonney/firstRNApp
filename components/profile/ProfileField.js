import React, {Component} from 'react';
import {Text} from "react-native";

import ImageProfileField from "./ImageProfileField";
import NameProfileField from "./NameProfileField";
import InputProfileField from "./InputProfileField";

export default class ProfileField extends Component<Props> {
    render() {
        if (this.props.source){
            return (
                <ImageProfileField
                       source={this.props.source}
                />
            )
        }

        if (this.props.callback){
            return (
                <InputProfileField
                    style={this.props.style}
                    label={this.props.label}
                    value={this.props.value}
                    callback={this.props.callback}
                />
            )
        }

        if (this.props.value){
            return (
                <NameProfileField
                    style={this.props.style}
                    label={this.props.label}
                    value={this.props.value}
                />
            )
        }

        return (
            <Text >
                Something bad happened.
            </Text>
        )
    }
}