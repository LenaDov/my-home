import React from 'react'

import { CssVarsProvider, Sheet } from '@mui/joy'
import CssBaseline from '@mui/joy/CssBaseline/CssBaseline'
import TwoSidedLayout from '../components/TwoSidedLayout'
import Greeting from '../Features/Greeting/Greeting'
import HabitsTable from '../Features/Habits/HabitsTable'
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
    )
}

export default HomePage
