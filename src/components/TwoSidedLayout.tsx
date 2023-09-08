import React, { PropsWithChildren } from 'react'
import { AspectRatio, Sheet, Stack } from '@mui/joy'

type TwoSidedLayoutProps = {
    children?: React.ReactNode;
}

const TwoSidedLayout = (props: PropsWithChildren<TwoSidedLayoutProps>) => {
    return (
        <Stack
            direction="row"
            justifyContent='center'
            useFlexGap
            sx={{
                maxWidth: 1200,
                mx: 'auto', // margin left & right
                my: 4, // margin top & bottom
                py: 10, // padding top & bottom
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
                {props.children}
            </Sheet>
            <AspectRatio
                ratio={600 / 520}
                variant="outlined"
                sx={{
                    minWidth: 300,
                    bgcolor: 'background.level2',
                    borderRadius: 'md',
                    alignSelf: 'stretch',
                    flexGrow: 1
                }}
            >
                <img
                    src='https://images.unsplash.com/photo-1483791424735-e9ad0209eea2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                    alt=''
                />
            </AspectRatio>
        </Stack >
    )
}

export default TwoSidedLayout