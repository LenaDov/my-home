import React from "react";
import { Stack, Input, Checkbox, } from "@mui/joy";
import { text } from "stream/consumers";

interface TaskProps {
    task: {
        text: string | undefined,
        checked: boolean
    },
    onTextChange: React.ChangeEventHandler<HTMLInputElement>,
    onCheckChange: React.ChangeEventHandler<HTMLInputElement>,
}

const Task = ({ task, onTextChange, onCheckChange }: TaskProps) => {
    return (
        <Stack direction='row' alignItems="center">
            <Checkbox variant="soft" checked={task.checked} onChange={onCheckChange} />
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

export default Task