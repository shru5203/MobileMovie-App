
import { Tabs } from "expo-router";
import {
    ImageBackground,
    StyleSheet,
    Text,
    Image,
    View,
} from "react-native";

import { images } from "../../2025-03 React Native Movie App/React Native Movie App (assets)/constants/images";
import { icons } from "../../2025-03 React Native Movie App/React Native Movie App (assets)/constants/icons";
import colors from "tailwindcss/colors";

interface TabsIconProps {
    focused: boolean;
    icon: any;
    title: string;
}

const TabsIcon = ({ focused, icon, title }: TabsIconProps) => {
    return (

        <ImageBackground
            source={focused ? images.highlight : undefined}
            style={styles.tabContainer}
            resizeMode="stretch"
        >
            <Image
                source={icon}
                tintColor={focused ? "#151312" : "#A8B5DB"}
                style={styles.icon}
            />

            {focused && <Text style={styles.text}>{title}</Text>}
        </ImageBackground>
    );
};

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarShowLabel: false,
            // tabBarItemStyle: {
            //     width: 100,
            //     justifyContent: 'center',
            //     alignItems: 'center',
            // },
            tabBarStyle: {
                backgroundColor: '#0f0D23',
                borderRadius: 50,
                marginHorizontal: 20,
                marginBottom: 36,
                height:50,

                position: 'absolute',
                overflow: 'hidden',
                borderWidth: 1,
                borderColor: '0f0d23',
                justifyContent: 'center',
                alignItems: 'center',
            }

        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabsIcon
                            focused={focused}
                            icon={icons.home}
                            title="Home"
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="Search"
                options={{
                    title: "Search",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabsIcon
                            focused={focused}
                            icon={icons.search}
                            title="Search"
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="Save"
                options={{
                    title: "Save",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabsIcon
                            focused={focused}
                            icon={icons.save}
                            title="Save"
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabsIcon
                            focused={focused}
                            icon={icons.person}
                            title="Profile"
                        />
                    ),
                }}
            />
        </Tabs>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: "row",
        width: 100,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        overflow: "hidden",
    },

    icon: {
        width: 20,
        height: 20,
    },

    text: {
        color: "#AB8BFF",
        fontSize: 16,
        fontWeight: "600",
        marginLeft: 8,
    },
});

export default TabsLayout;
