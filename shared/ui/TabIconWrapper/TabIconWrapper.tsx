import React from 'react'
import { SvgProps } from 'react-native-svg'
import { Text, useColorScheme, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { Colors } from '@/shared/config/colors'

interface TabIconWrapperProps {
    IconComponent: React.FunctionComponent<SvgProps>
    title: string
    focused: boolean
}

export function TabIconWrapper(props: TabIconWrapperProps) {
    const { IconComponent, title, focused } = props

    const colorScheme = useColorScheme() ?? 'light'

    const backgroundColor = focused
        ? Colors[colorScheme].primaryLight
        : 'transparent'

    const color = focused
        ? Colors[colorScheme].primary
        : Colors[colorScheme].secondaryForeground

    return (
        <View style={styles.container}>
            <View style={[styles.iconContainer, { backgroundColor }]}>
                <IconComponent fill={color} />
            </View>
            <Text style={[styles.title, { color }]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
    },
    iconContainer: {
        paddingVertical: 5,
        paddingHorizontal: 22,
        borderRadius: 4,
    },
    title: {
        fontWeight: 'medium',
        fontSize: 12,
    },
})
