import { View, Text, Image, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'

import { useNavigation } from '@react-navigation/native';

type CardProps = {
    data: {
        id: number,
        description: string,
        location: string
        url: string
    }
}

export default function Card({ data }: CardProps) {

    const navigation = useNavigation();

    return (
        <View className='my-3 gap-y-1'>
            <TouchableOpacity onPress={() => navigation.navigate("SeeMore", data)}>
                <Image source={{ uri: data.url }} className='flex h-52 flex-grow rounded-md' />
            </TouchableOpacity>
            <View className='flex-row items-center justify-between'>
                <Text className='text-white text-lg font-bold'>{data.location}</Text>
                <FontAwesome name='bookmark' size={16} color='#CCC'/>
            </View>
            <Text className='text-white'>{data.description}</Text>
        </View>
    );
}