import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Task() {

    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,  // Hide the header
        });
    }, [navigation]);

    return (
        <View className='flex-1 bg-[#5886FE]'>

            <View>
                <View className='flex-row justify-between px-2 pt-3'>
                    <MaterialIcons name="arrow-back-ios-new" size={20} color="white" />
                    <Entypo name="dots-three-vertical" size={20} color="white" />
                </View>

                <View className='pl-12 mt-10'>
                    <View className="bg-white p-2 rounded-full w-[40px] h-[40px]">
                        <MaterialCommunityIcons name="clipboard-list-outline" size={25} color="gray" />
                    </View>
                    <Text className='text-3xl text-white mt-6 font-medium'>All</Text>
                    <Text className='text-gray-300'>0 Tasks</Text>
                </View>
            </View>

            <ScrollView className='flex-1 bg-white mt-10 rounded-t-xl'>
                {/* {Late ?}
                <Text className='text-gray-500'>Late</Text> */}
            </ScrollView>

            <TouchableOpacity className='absolute bottom-5 right-5 rounded-full w-[50px] h-[50px] bg-blue-900 items-center justify-center'
            onPress={()=> console.log("work")}>
                <FontAwesome6 name="plus" size={20} color="white"/>
            </TouchableOpacity>

        </View>
    )
}