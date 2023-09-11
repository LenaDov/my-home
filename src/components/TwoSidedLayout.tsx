import React, { PropsWithChildren } from 'react'
import { AspectRatio, Sheet, Stack } from '@mui/joy'

type TwoSidedLayoutProps = {
    children?: React.ReactNode;
}

const TwoSidedLayout = ({children}: PropsWithChildren<TwoSidedLayoutProps>) => {
    return (
        <Stack
            direction="row"
            justifyContent='center'
            useFlexGap
            sx={{
                maxWidth: 1200,
                mx: 'auto', // margin left & right
                my: 4, // margin top & bottom
                py: 8, // padding top & bottom
                px: 3, // padding left & right
                gap: 4,
                position: 'relative',
                minHeight: '100vh'
            }}
        >
            <Sheet
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    maxWidth: '50ch',
                    flexShrink: 999,
                    minWidth: 420,
                    alignItems: 'flex-start',
                    textAlign: 'initial',
                }}
            >
                {children}
            </Sheet>
            <AspectRatio
                ratio={550 / 520}
                variant="outlined"
                sx={{
                    minWidth: 300,
                    bgcolor: 'background.level2',
                    borderRadius: 'md',
                    alignSelf: 'stretch',
                    flexGrow: 1,
                }}
            >
                <img
                    src='IMG_20220430_091804.jpg'
                    alt=''
                />
            </AspectRatio>
        </Stack >
    )
}

export default TwoSidedLayout