import React from "react";
import { List, ListItem, Typography } from "@mui/joy";
import Task from "./Task";

interface TasksProps {
    tasks: { text: string, checked: boolean }[],
    onTextChange: (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => void,
    onCheckChange: (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Tasks = ({ tasks, onTextChange, onCheckChange }: TasksProps) => {
    return (
        <div>
            <Typography level='title-md' color='neutral'>
                What is your priority today?
            </Typography>
            <div role="group" aria-labelledby="sandwich-group">
                <List size="sm" sx={{ "--ListItem-paddingY": "0px" }}>
                    <ListItem>
                        <Task task={tasks[0]} onTextChange={onTextChange(0)} onCheckChange={onCheckChange(0)} />
                    </ListItem>
                    <ListItem>
                        <Task task={tasks[1]} onTextChange={onTextChange(1)} onCheckChange={onCheckChange(1)} />
                    </ListItem>
                    <ListItem>
                        <Task task={tasks[2]} onTextChange={onTextChange(2)} onCheckChange={onCheckChange(2)} />
                    </ListItem>
                </List>
            </div>
            <Typography color="success" level="body-lg">
                Awesome! Lest continue to your habits.
            </Typography>
        </div>
    )
}

export default Tasks;