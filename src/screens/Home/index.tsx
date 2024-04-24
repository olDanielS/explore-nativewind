import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, FlatList, SafeAreaView } from 'react-native';

import locations from '../../Services/data.json'

import Header from '../../Components/Header';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Card from '../../Components/Card';

export default function Home() {
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View className={"flex-1 bg-primary-black"}>
        <Header />
        <View className='flex-1 p-3'>
          <View className='flex-row items-center'>
            <Text className='text-5xl text-white font-bold '>Explore</Text>
            <Feather name='chevron-down' size={24} color='#FFF' />
          </View>
          <View className='mt-5 flex-row justify-between gap-x-4 items-center'>
            <FontAwesome name='map-marker' size={24} color='#fff'></FontAwesome>
            <View className='flex-grow border-b border-gray-50'>
              <TextInput className=' p-1 text-base text-white p' placeholderTextColor={'#ccc'} placeholder='Search for a destination' />
            </View>
            <View className='bg-primary-yellow p-2 rounded-xl' >
              <Feather name='search' size={20} color='#FFF' />
            </View>
          </View>

          <FlatList 
            className='mt-5'
            data={locations}
            renderItem={({item}) => <Card data={item}/>}
            keyExtractor={item => item.id.toString()}
          />

        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}