import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import 'react-native-reanimated'
import { useEffect } from 'react'
import React from 'react'

void SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const [loaded] = useFonts({
        'Roboto-Regular': require('@/assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Medium': require('@/assets/fonts/Roboto-Medium.ttf'),
    })

    useEffect(() => {
        if (loaded) {
            void SplashScreen.hideAsync()
        }
    }, [loaded])

    if (!loaded) {
        return null
    }

    return (
        <Stack>
            <Stack.Screen
                name={'(tabs)'}
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    )
}
