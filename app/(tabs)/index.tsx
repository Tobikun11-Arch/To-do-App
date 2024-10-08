import { SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import HomePage from '../pages/Auth/HomePage'

const Index = () => {
  return (
    <SafeAreaView className='flex-1 bg-gray-200'>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <HomePage />
    </ScrollView>
  </SafeAreaView>
  );
};

export default Index;
