import { WebView } from 'react-native-webview'
import React from 'react'

export default function TemperaturePage() {
    return <WebView source={{ uri: 'https://mdrk.ru/temp/webview_v2.php' }} />
}
