import React from 'react'
import {
    View,
    Button
} from 'react-native'
import {} from 'react-native-keyboard-aware-scrollview'

export default class ArpanTest extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button
                    title="Next"
                    onPress= { () =>{ 
                        // alert("hello")
                        this.props.navigation.navigate('Ganga',{
                            message : 'Ganga is mad person'
                        } )
                    }}
                />
            </View>
        )
    }

}