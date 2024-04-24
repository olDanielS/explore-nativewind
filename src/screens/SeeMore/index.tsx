import { View, Image, Text, TouchableOpacity } from 'react-native';
import Header from '../../Components/Header';

import FontAwesome from '@expo/vector-icons/FontAwesome'

import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
    SeeMore: {
        id: number;
        description: string;
        location: string;
        url: string;
    };
};

type SeeMoreScreenRouteProp = RouteProp<RootStackParamList, 'SeeMore'>;

type SeeMoreProps = {
    route: SeeMoreScreenRouteProp;
};

export default function SeeMore({ route }: SeeMoreProps) {

    return (
        <View className={"flex-1 bg-primary-black"}>
            <Header />


                <View className='flex h-4/6 bg-slate-950'>
                    <Image source={{ uri: route?.params.url }} className='flex h-full w-full m-0 p-0' />
                </View>

            
                <View className='p-2.5'>
                    <View className='flex flex-row items-center justify-between'>
                        <Text className='text-2xl font-bold text-white'>{route.params.location}</Text>
                        <View className='gap-3 flex-row items-center'>
                            <FontAwesome name='bookmark' size={18} color='#CCC' />
                            <FontAwesome name='ellipsis-v' size={18} color='#CCC' />
                        </View>
                    </View>
                    <Text className='my-2 text-white font-regular '>{route.params.description}</Text>
                    <TouchableOpacity className='mt-2 bg-primary-yellow p-4 items-center justify-center rounded' >
                        <Text className='text-white font-bold text-lg'>Book this trip</Text>
                    </TouchableOpacity>
                </View>
            </View>

        
    );
}