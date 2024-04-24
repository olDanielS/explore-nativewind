import { TouchableOpacity, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import { DrawerNavigationProp } from '@react-navigation/drawer';

import { useNavigation, ParamListBase } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

    return (
        <View className='flex h-10 justify-between item-center flex-row '>
            <View>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Feather name='menu' size={30} color='#FFF' />
                </TouchableOpacity>
            </View>
            <View>
                <Feather name='user' size={30} color='#FFF' />
            </View>
        </View>
    );
}