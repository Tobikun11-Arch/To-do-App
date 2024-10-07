import { SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import SignUp from '../pages/Auth/SignUp';

const Index = () => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SignUp />
    </ScrollView>
  </SafeAreaView>
  );
};

export default Index;
