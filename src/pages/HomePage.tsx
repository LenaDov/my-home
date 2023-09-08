import React from 'react'
import DateDisplay from '../components/DateDisplay'

import { CssVarsProvider, Sheet, Stack, Typography } from '@mui/joy'
import CssBaseline from '@mui/joy/CssBaseline/CssBaseline'
import TwoSidedLayout from '../components/TwoSidedLayout'
import Greeting from '../components/Greeting'
import HabitsTable from '../components/HabitsTable'
import SimpleLayout from '../components/SimpleLayout'

const HomePage = () => {
    return (
        <CssVarsProvider>
            <CssBaseline />
            <Sheet
                sx={{
                    height: '100vh',
                    overflowY: 'scroll',
                    scrollSnapType: 'y mandatory',
                    '& > div': {
                        scrollSnapAlign: 'start',
                    },
                }}
            >
                <TwoSidedLayout>
                    <Greeting/>
                </TwoSidedLayout>
                <SimpleLayout>
                    <HabitsTable/>
                </SimpleLayout>
                
            </Sheet>
        </CssVarsProvider>

        // <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        //     <h1 style={{ fontSize: '4em' }}>Hello world!</h1>
        //     <DateDisplay />
        // </div>
    )
}

export default HomePage
