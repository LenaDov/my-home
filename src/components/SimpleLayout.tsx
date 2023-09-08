import React, { PropsWithChildren } from 'react'
import { AspectRatio, Sheet, Stack } from '@mui/joy'

type TwoSidedLayoutProps = {
    children?: React.ReactNode;
}

const TwoSidedLayout = ({children}: PropsWithChildren<TwoSidedLayoutProps>) => {
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

export default TwoSidedLayout