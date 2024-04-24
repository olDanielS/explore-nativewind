import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import SeeMore from "../screens/SeeMore";

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
            <Drawer.Screen name="SeeMore" component={SeeMore} 
            initialParams={{ // Passe os parâmetros de rota necessários aqui
                id: 0,
                description: '',
                location: '',
                url: ''
              }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerRoutes;