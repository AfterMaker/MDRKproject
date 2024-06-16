import { WebView } from 'react-native-webview'
import { useRef, useState } from 'react'
import { ResizeMode, Video, VideoFullscreenUpdate } from 'expo-av'
import { StatusBar, Alert } from 'react-native'
import * as ScreenOrientation from 'expo-screen-orientation'
import React from 'react'

interface IVideo {
    url: string
    title: string
}

export default function CCTVPage() {
    const ref = useRef<Video | null>(null)
    const [video, setVideo] = useState<IVideo | null>(null)

    const handleOrientationChange = (isFullscreen: boolean) => {
        if (isFullscreen) {
            ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.LANDSCAPE
            )
        } else {
            ScreenOrientation.unlockAsync()
        }
    }

    const handleFullScreen = (status: boolean) => {
        StatusBar.setHidden(status, 'none')
        handleOrientationChange(status)
    }

    const showAlert = (errorMessage: string) => {
        Alert.alert(
            'Ошибка',
            'Произошла ошибка при обработке видео. Код ошибки: ' + errorMessage
        )
    }

    return (
        <>
            <WebView
                source={{ uri: 'https://mdrk.ru/cam/webview_v2.php' }}
                onMessage={(event) => {
                    const { data } = event.nativeEvent
                    setVideo(JSON.parse(data))
                }}
            />
            {video && video.url && (
                <>
                    <Video
                        ref={ref}
                        source={{
                            uri: video.url,
                        }}
                        onError={(error) => {
                            showAlert(error)
                        }}
                        onLoad={() => {
                            ref.current?.presentFullscreenPlayer()
                            handleFullScreen(true)
                        }}
                        onFullscreenUpdate={(event) => {
                            if (
                                event.fullscreenUpdate ===
                                VideoFullscreenUpdate.PLAYER_WILL_DISMISS
                            ) {
                                handleFullScreen(false)
                            } else if (
                                event.fullscreenUpdate ===
                                VideoFullscreenUpdate.ENTERED_FULLSCREEN
                            ) {
                                handleFullScreen(true)
                            }
                        }}
                        resizeMode={ResizeMode.CONTAIN}
                        shouldPlay
                    />
                </>
            )}
        </>
    )
}
