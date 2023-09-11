import React, { PropsWithChildren } from 'react'
import { Sheet } from '@mui/joy'

type SimpleLayoutProps = {
    children?: React.ReactNode;
}

const SimpleLayout = ({children}: PropsWithChildren<SimpleLayoutProps>) => {
    return (
        <Sheet
            sx={{
                maxWidth: 1200,
                mx: 'auto', // margin left & right
                my: 4, // margin top & bottom
                py: 10, // padding top & bottom
                px: 3, // padding left & right
                gap: 4,
                position: 'relative',
                minHeight: '100vh',
            }}
        >
            {children}
        </Sheet >
    )
}

export default SimpleLayout