import React, { Fragment } from "react";
import { Typography, Sheet, Table} from "@mui/joy";

import { habitsData } from '../../resources/DataMocks'
import HabitRow from "./HabitRow";

const Habits = () => {
    const [habits] = React.useState(habitsData);

    return (
        <Fragment>
            <Typography level="h2" color="primary">Habit Tracker</Typography>
            <Sheet sx={{
                mx: 'auto', // margin left & right
                my: 1, // margin top & bottom
                py: 3, // padding top & bottom
                px: 2, // padding left & right
                borderRadius: 'sm',
                boxShadow: 'md',
            }}>
                <Table
                    borderAxis="none"
                    color="neutral"
                    size="lg"
                    stickyHeader
                    hoverRow
                >
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Gratitude</th>
                            <th>Meditation</th>
                            <th>Run</th>
                            <th>Learn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {habits.map((row) => (
                            <HabitRow key={row.date} habit={row} />
                        ))}
                    </tbody>
                </Table>
            </Sheet>
        </Fragment>
    )
}

export default Habits