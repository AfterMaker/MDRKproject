import { Tabs } from 'expo-router'
import { Colors } from '@/shared/config/colors'
import { Platform, useColorScheme } from 'react-native'
import { CCTVIcon, TransportIcon, TemperatureIcon } from '@/assets/images/icons'
import { RadiatorsIcon } from '@/assets/images/icons/RadiatorsIcon'
import React from 'react'
import { TabIconWrapper } from '@/shared/ui/TabIconWrapper'

export default function TabsLayout() {
    const colorScheme = useColorScheme()

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].primary,
                headerShown: false,
                tabBarStyle: {
                    height: 90,
                },
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    marginTop: Platform.OS === 'ios' ? 10 : 0,
                },
            }}
        >
            <Tabs.Screen
                name={'transport'}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIconWrapper
                            IconComponent={TransportIcon}
                            title={'Транспорт'}
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name={'cctv'}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIconWrapper
                            IconComponent={CCTVIcon}
                            title={'Камеры'}
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name={'radiators'}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIconWrapper
                            IconComponent={TemperatureIcon}
                            title={'Температура'}
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name={'temperature'}
                options={{
                    title: 'Радиаторы',
                    tabBarIcon: ({ focused }) => (
                        <TabIconWrapper
                            IconComponent={RadiatorsIcon}
                            title={'Радиаторы'}
                            focused={focused}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}
