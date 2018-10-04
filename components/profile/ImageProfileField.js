import React, {Component} from 'react';
import {Image} from "react-native";

export default class ImageProfileField extends Component<Props> {
    render() {
        return (
            <Image style={{height: 50, width: 50}}
                   source={this.props.source}
            />
        )
    }
}