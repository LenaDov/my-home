import React, { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../store/reducers/store";
import { selectTasks, toggleTask, updateTask } from "./TasksSlice";

import { Button, Link, Typography } from "@mui/joy";
import Tasks from "./Tasks";

const Greeting = () => {
    const tasks = useAppSelector(selectTasks);

    const dispatch = useAppDispatch();

    const onToggleTask =
        (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(toggleTask(id));
        };

    const onTextChange =
        (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
            const text = event.target.value;
            dispatch(updateTask({id, text}));
        };

    return (
        <Fragment>
            <Typography level='title-md' color='primary' fontSize="lg" fontWeight="lg">The Power to do more</Typography>
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
            <Tasks tasks={tasks} onTextChange={onTextChange} onCheckChange={onToggleTask} />
            <Button size="lg" onClick={() => { }}>Build Habits</Button>
            <Typography level='title-sm' color='neutral'>
                Taking it slow today? <Link level='title-sm'>Do things you enjoy</Link>
            </Typography>
        </Fragment>
    )
}

export default Greeting