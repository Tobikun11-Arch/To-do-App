import { View, Text, SafeAreaView, ScrollView} from 'react-native'
import React from 'react'
import Login from '../pages/Auth/Login'
import SignUp from '../pages/Auth/SignUp'

const index = () => {
  return (
    <SafeAreaView>
        <ScrollView>
        <Text className='text-white mt-24'>Hello</Text>
        <Login/>
        <SignUp/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default index