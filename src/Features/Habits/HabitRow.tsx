import React from "react";
import { Checkbox } from "@mui/joy";

interface HabitRowProps {
    habit: {
        date: string,
        gratitude: boolean,
        meditation: boolean,
        run: boolean,
        learn: boolean,
    }
}

const HabitRow = ({ habit }: HabitRowProps) => {
    const [row, setRow] = React.useState(habit);

    const toggleGratitude = (event: React.ChangeEvent<HTMLInputElement>) => 
        setRow({ ...row, gratitude: event.target.checked});

        const toggleMeditation = (event: React.ChangeEvent<HTMLInputElement>) => 
        setRow({ ...row, meditation: event.target.checked});

        const toggleRun = (event: React.ChangeEvent<HTMLInputElement>) => 
        setRow({ ...row, run: event.target.checked});

        const toggleLearn = (event: React.ChangeEvent<HTMLInputElement>) => 
        setRow({ ...row, learn: event.target.checked});

    return (
        <tr key={row.date}>
            <td>{row.date}</td>
            <td>
                <Checkbox variant='soft' checked={row.gratitude} onChange={toggleGratitude} />
            </td>
            <td>
                <Checkbox variant='soft' checked={row.meditation} onChange={toggleMeditation} />
            </td>
            <td>
                <Checkbox variant='soft' checked={row.run} onChange={toggleRun} />
            </td>
            <td>
                <Checkbox variant='soft' checked={row.learn} onChange={toggleLearn} />
            </td>
        </tr>

    )
}

export default HabitRow