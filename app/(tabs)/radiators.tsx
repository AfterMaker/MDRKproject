import { WebView } from 'react-native-webview'
import React from 'react'

export default function RadiatorsPage() {
    return (
        <WebView source={{ uri: 'https://mdrk.ru/temp/city/webview_v2.php' }} />
    )
}
