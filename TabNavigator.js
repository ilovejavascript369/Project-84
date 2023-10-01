import React from 'react';
import { CreateBottomNavigator } from 'react-navigation/bottom-tabs'
import Feed from '../screens/Feed'
import CreatePost from '../screens/CreatePost'
import  Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = CreateBottomNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOption={({ route })} => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Feed') {
                        iconName = focused
                            ? 'book'
                            : 'book-outline';
                    }
                    else if (route.name === 'CreatePost') {
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;

                }
            })
            tabBarOptions={
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray'
            }
            >
        
            <Tab.Screen name='Feed' component={Feed} />;
            <Tab.Screen name='CreatePost' component={CreatePost} />;
        </Tab.Navigator>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : CSSVariableReferenceValue(35)
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.8,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28)
    },
    cardContainer: {
        flex: 0.85
    }
});


export default BottomTabNavigator