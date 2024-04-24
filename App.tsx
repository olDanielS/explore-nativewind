import 'react-native-gesture-handler';
import { StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import DrawerRoutes from './src/Routes/DrawerRoutes';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#0C0D0E" barStyle='light-content'/>
      <NavigationContainer>
          <DrawerRoutes/>
      </NavigationContainer>
    </>    
  );
}
