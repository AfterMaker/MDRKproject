import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

export const TransportIcon = (props: SvgProps) => (
    <Svg width={24} height={24} {...props}>
        <Path d="M22 8V5.229c0-1.998-1.331-3.775-3.236-4.321C16.659.305 14.384 0 12 0 9.616 0 7.341.306 5.236.908 3.33 1.454 2 3.231 2 5.229V8c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2v2.5a4.5 4.5 0 0 0 2 3.74v1.26C4 22.878 5.122 24 6.5 24S9 22.878 9 21.5V21h6v.5c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5v-1.26a4.5 4.5 0 0 0 2-3.74V14c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2Zm-9.5 5V6H21v7h-8.5ZM3 13V6h8.5v7H3ZM5.512 1.869C7.527 1.292 9.71 1 12 1s4.473.292 6.488.869c1.406.403 2.408 1.672 2.503 3.131H3.008c.096-1.459 1.099-2.728 2.504-3.131ZM1 12v-2c0-.551.449-1 1-1v4c-.551 0-1-.449-1-1Zm7 9.5c0 .827-.673 1.5-1.5 1.5S5 22.327 5 21.5v-.757c.469.166.974.257 1.5.257H8v.5Zm11 0c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5V21h1.5c.526 0 1.031-.091 1.5-.257v.757Zm2-5c0 1.93-1.57 3.5-3.5 3.5h-11C4.57 20 3 18.43 3 16.5V14h3v1.5a.5.5 0 0 0 1 0V14h10v1.5a.5.5 0 0 0 1 0V14h3v2.5Zm2-4.5c0 .551-.449 1-1 1V9c.551 0 1 .449 1 1v2Z" />
    </Svg>
)
