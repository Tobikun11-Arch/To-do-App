import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Task() {

    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,  // Hide the header
        });
    }, [navigation]);

    return (
        <View className='flex-1 bg-white'>
        <Text className='font=bold text-2xl'>Task</Text>
        </View>
    )
}