import React from "react";

import { List, ListItem, Typography } from "@mui/joy";
import TaskField, { Task } from "./TaskField";

interface TasksProps {
    tasks: Task[],
    onTextChange: (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => void,
    onCheckChange: (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Tasks = ({ tasks, onTextChange, onCheckChange }: TasksProps) => {
    return (
        <div>
            <Typography level='title-md' color='neutral'>
                What is your priority today?
            </Typography>
            <div role="group" aria-labelledby="sandwich-group">
                <List size="sm" sx={{ "--ListItem-paddingY": "0px" }}>
                    {tasks.map(task => 
                    <ListItem key={task.id}>
                        <TaskField
                            task={task} 
                            onTextChange={onTextChange(task.id)} 
                            onCheckChange={onCheckChange(task.id)} 
                        />
                    </ListItem>
                    )}
                </List>
            </div>
            <Typography color="success" level="body-lg">
                Awesome! Lest continue to your habits.
            </Typography>
        </div>
    )
}

export default Tasks;