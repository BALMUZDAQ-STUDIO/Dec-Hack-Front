import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {Tabs} from "expo-router";
import {icons} from "../../constants";
import {BrainIcon, CoursesIcon, HomeIcon, SettingsIcon} from "../../constants/svg_icons";


const TabIcon = ({icon, color, name, focused, classNames}) => {
    return (
        <View className={`justify-center items-center ${classNames}`}>
            {icon}
            <Text className={`${focused ? 'font-interBold font-bold  text-[#00D4FF] pt-2' : 'font-interBold font-bold text-white pt-2'} text-xs`}>{name}</Text>
        </View>
    )
}

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#00D4FF",
                    tabBarInactiveTintColor: "#ffffff",
                    tabBarStyle: {
                        paddingTop:20,
                        justifyContent: "center",
                        alignItems:"center",
                        height: 90,
                        backgroundColor:"#245A8F",
                    }
                }}>
                <Tabs.Screen
                    name="home"
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon
                                icon={<HomeIcon/>}
                                name="Home"
                                color={color}
                                focused={focused}
                            />

                        )
                    }}
                />
                <Tabs.Screen
                    name="courses"
                    options={{
                        title: 'Courses',
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon
                                icon={<CoursesIcon/>}
                                name="Courses"
                                color={color}
                                focused={focused}
                            />

                        )
                    }}
                />

                <Tabs.Screen
                    name="assistant"
                    options={{
                        title: 'Assistant',
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon
                                icon={<BrainIcon/>}
                                name="Assistant"
                                color={color}
                                focused={focused}

                            />

                        )
                    }}
                />

                <Tabs.Screen
                    name="settings"
                    options={{
                        title: 'Settings',
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon
                                icon={<SettingsIcon/>}
                                name="Settings"
                                color={color}
                                focused={focused}

                            />

                        )
                    }}
                />
            </Tabs>
        </>
    )
}
export default TabsLayout
