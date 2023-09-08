import React from "react";
import { Stack, Input, Checkbox, } from "@mui/joy";

const Task = () => {
    return (
        <Stack direction='row' alignItems="center">
            <Checkbox variant="soft" />
            <Input size="sm" variant="plain" placeholder="Type here..." />
        </Stack>
    )
}

export default Task