import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";

const DrawerRoutes = () =>{
   const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Drawer.Screen name="Home" component={Home} 
            
            />
        </Drawer.Navigator>
    )
}

export default DrawerRoutes;