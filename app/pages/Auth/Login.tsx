import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';

const Login = () => {

    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: '', // Custom title
            headerStyle: { backgroundColor: 'white' }, // Custom header background
            headerTintColor: '#333', // Custom header text color
        });
    }, [navigation]);

    return (
        <View className='flex-1 bg-white'>
        <Text className='text-black'>Login</Text>
        </View>
    )
}

export default Login