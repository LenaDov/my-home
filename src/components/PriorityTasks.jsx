import React from "react";
import { List, ListItem, Typography } from "@mui/joy";
import Task from "./Task";

const PriorityTasks = () => {
    return (
        <div>
            <Typography level='title-md' color='neutral'>
                What is your priority today?
            </Typography>
            <div role="group" aria-labelledby="sandwich-group">
                <List size="sm" sx={{"--ListItem-paddingY": "0px"}}>
                    <ListItem>
                        <Task />
                    </ListItem>
                    <ListItem>
                        <Task />
                    </ListItem>
                    <ListItem>
                        <Task />
                    </ListItem>
                </List>
            </div>
            <Typography color="success" level="body-lg">
                Awesome! Lest continue to your habits.
            </Typography>
        </div>
    )
}

export default PriorityTasks;