import React from 'react'
import { View } from 'react-native';

interface HomeProps {
    children: React.ReactNode;
    className?: string;
}

const HomePage = ({children}: HomeProps) => {

    return (
        <View className='flex-row justify-between mt-4 w-full'>
            <View className='p-5 bg-white flex-1 rounded-md flex-col justify-between mr-3'>
                {children}
            </View>
        </View>
        //wrong but use as reference later
    )
}

export default HomePage
