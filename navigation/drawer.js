import react from "react";
import { createDrawerNavigator } from "react";
import TabNavigator from "./tabNavigator";
import Profile from "../screens/profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.screen name="Home" component={TabNavigator}/>
            <Drawer.screen name="Profile" component={Profile}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator