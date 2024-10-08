import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';  
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';

export default function SignUp() {
    return (
        <View className='flex-1 px-4 pb-4 pt-4' >
            <Entypo name="menu" size={35} color="black" />
            <Text className='font-bold text-2xl mt-1'>Lists</Text>


            <View className='flex-row justify-between mt-4 w-full'>
                <Link href={'/pages/LIst/Task'} asChild>
                    <TouchableOpacity className='p-5 bg-white flex-1 rounded-md flex-col justify-between mr-3'>
                        <MaterialCommunityIcons name="clipboard-list-outline" size={35} color="blue" />
                        <View className='pt-5'>
                            <Text className='font-semibold text-xl'>All</Text>
                            <Text className='font-normal text-gray-400'>0 Tasks</Text>
                        </View>
                    </TouchableOpacity>
                </Link>

                <Link href={'./Login'} asChild>
                    <TouchableOpacity className='p-5 bg-white flex-1 rounded-md flex-col justify-between'>
                        <MaterialCommunityIcons name="notebook" size={35} color="gray" />
                        <View className='pt-5'>
                            <Text className='pt-3 font-semibold text-xl'>Study</Text>
                            <Text className='font-normal text-gray-400'>0 Tasks</Text>
                        </View>
                    </TouchableOpacity>
                </Link>
            </View>

            <View className='flex-row justify-between mt-4 w-full'>
                <View className='p-5 bg-white flex-1 rounded-md flex-col justify-between mr-3'>
                    <Ionicons name="headset-sharp" size={35} color="green" />
                    <View className='pt-5'>
                        <Text className='font-semibold text-xl'>Music</Text>
                        <Text className='font-normal text-gray-400'>0 Tasks</Text>
                    </View>
                </View>

                <View className='p-5 bg-white flex-1 rounded-md flex-col justify-between'>
                    <MaterialCommunityIcons name="airplane" size={35} color="gray" />
                    <View className='pt-5'>
                        <Text className='pt-3 font-semibold text-xl'>Travel</Text>
                        <Text className='font-normal text-gray-400'>0 Tasks</Text>
                    </View>
                </View>
            </View>

            <View className='flex-row justify-between mt-4 w-full'>
                <View className='p-5 bg-white flex-1 rounded-md flex-col justify-between mr-3'>
                    <Ionicons name="briefcase-outline" size={35} color="#FF5733" />
                    <View className='pt-5'>
                        <Text className='font-semibold text-xl'>Work</Text>
                        <Text className='font-normal text-gray-400'>0 Tasks</Text>
                    </View>
                </View>

                <View className='p-5 bg-white flex-1 rounded-md flex-col justify-between'>
                    <Ionicons name="home" size={35} color="#3498DB" />
                    <View className='pt-5'>
                        <Text className='pt-3 font-semibold text-xl'>Home</Text>
                        <Text className='font-normal text-gray-400'>0 Tasks</Text>
                    </View>
                </View>
            </View>

            <View className='flex-row justify-between mt-4 w-full'>
                <View className='p-5 bg-white flex-1 rounded-md flex-col justify-between mr-3'>
                    <FontAwesome name="paint-brush" size={35} color="#9B59B6" />
                    <View className='pt-5'>
                        <Text className='font-semibold text-xl'>Arts</Text>
                        <Text className='font-normal text-gray-400'>0 Tasks</Text>
                    </View>
                </View>

                <View className='p-5 bg-white flex-1 rounded-md flex-col justify-between'>
                    <AntDesign name="shoppingcart" size={35} color="#F39C12" />
                    <View className='pt-5'>
                        <Text className='pt-3 font-semibold text-xl'>Shop</Text>
                        <Text className='font-normal text-gray-400'>0 Tasks</Text>
                    </View>
                </View>
            </View>

        </View>
    );
}