import React from 'react'
import DateDisplay from '../components/DateDisplay'

import {CssVarsProvider, Sheet, Typography } from '@mui/joy'
import Login from '../components/Login'
import CssBaseline from '@mui/joy/CssBaseline/CssBaseline'

const HomePage: React.FC = () => {
    return (
        <CssVarsProvider>
            <Login />
        </CssVarsProvider>

        // <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        //     <h1 style={{ fontSize: '4em' }}>Hello world!</h1>
        //     <DateDisplay />
        // </div>
    )
}

export default HomePage
