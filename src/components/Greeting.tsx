import { Button, Link, Typography } from "@mui/joy";
import React, { Fragment } from "react";
import Tasks from "./Tasks";

const Greeting = () => {
    const tasksMock = [{ text: 'eat', checked: true }, { text: 'love', checked: false }, { text: 'dance', checked: false }];

    const [tasks, setTasks] = React.useState(tasksMock);

    const toggleTask =
        (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
            const newTasks = [...tasks];
            newTasks[index].checked = event.target.checked;
            setTasks(newTasks);
        };

    const onTextChange =
        (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
            const newTasks = [...tasks];
            newTasks[index].text = event.target.value;
            setTasks(newTasks);
        };

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
            <Tasks tasks={tasks} onTextChange={onTextChange} onCheckChange={toggleTask} />
            <Button size="lg" onClick={() => { }}>Build Habits</Button>
            <Typography level='title-sm' color='neutral'>
                Taking it slow today? <Link level='title-sm'>Do things you enjoy</Link>
            </Typography>
        </Fragment>
    )
}

export default Greeting