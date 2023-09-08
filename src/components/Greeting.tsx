import { Button, Link, Typography } from "@mui/joy";
import React, { Fragment } from "react";
import PriorityTasks from "./PriorityTasks";


const Greeting = () => {
    return (
        <Fragment>
            <Typography level='title-md' color='primary' fontSize="lg" fontWeight="lg">The Power to do more.</Typography>
            <Typography
                level='h1'
                fontWeight="xl"
                fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
            >
                {"Welcome back Lena Dovgan! I've been waiting for you."}
            </Typography>
            <Typography level='title-md' color='neutral' fontSize="lg" lineHeight="lg">
                {"Let's get back to growing, learning and improving with every day that passes."}
            </Typography>
            <PriorityTasks/>
            <Button size="lg" onClick={() => { }}>Build Habits</Button>
            <Typography level='title-sm' color='neutral'>
                Taking it slow today? <Link level='title-sm'>Do things you enjoy</Link>
            </Typography>
        </Fragment>
    )
}

export default Greeting