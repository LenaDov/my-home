import React from "react";
import { Stack, Input, Checkbox, } from "@mui/joy";

export type Task = {
    id: number,
    text: string | undefined,
    completed: boolean
}

interface TaskProps {
    task: Task,
    onTextChange: React.ChangeEventHandler<HTMLInputElement>,
    onCheckChange: React.ChangeEventHandler<HTMLInputElement>,
}

const TaskField = ({ task, onTextChange, onCheckChange }: TaskProps) => {
    return (
        <Stack direction='row' alignItems="center">
            <Checkbox variant="soft" checked={task.completed} onChange={onCheckChange} />
            <Input
                value={task.text}
                size="sm"
                variant="plain"
                placeholder="Type here..."
                onChange={onTextChange}
                sx={{ '--Input-focusedHighlight': "transparent" }}
            />
        </Stack>
    )
}

export default TaskField