import React from 'react'
import {
    View,
    Text
} from 'react-native'

export default class GangaTest extends React.Component {

    render() {

        const { navigation } = this.props;
        const message = navigation.getParam('message', 'NO-ID');

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style = {{color : "#000", fontSize : 20 }}>{message}</Text>
            </View>
        )
    }

}